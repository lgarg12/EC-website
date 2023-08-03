const User = require("../Models/User");
const router = require("express").Router();
const bcrypt = require("bcrypt");

// userId is myself
// Update Operation
router.put("/:id", async (req, res) => {
    try {
        // Check if the request is made by the same user or an admin
        if (req.body.userId == req.params.id || req.user.isAdmin) {
            // If the request includes a new password, hash it before updating
            if (req.body.password) {
                const salt = await bcrypt.genSalt(10);
                req.body.password = await bcrypt.hash(req.body.password, salt);
            }

            // Update the user data
            const updatedUser = await User.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });

            if (!updatedUser) {
                return res.status(404).json({ message: "User not found" });
            }

            return res.status(200).json({ message: "Account has been updated", user: updatedUser });
        } else {
            return res.status(401).json({ message: "You can update only your account!" });
        }
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
});

// Delete operation
router.delete("/:id", async (req, res) => {
    try {
        // Check if the request is made by the same user or an admin
        if (req.body.userId == req.params.id || req.user.isAdmin) {
            // Delete the user
            const deletedUser = await User.findByIdAndRemove(req.params.id);

            if (!deletedUser) {
                return res.status(404).json({ message: "User not found" });
            }

            return res.status(200).json({ message: "Account has been deleted", user: deletedUser });
        } else {
            return res.status(401).json({ message: "You can delete only your account!" });
        }
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
});
// Get operation
router.get("/:id",async(req,res)=>{
    try{
        const user = await User.findById(req.params.id);
        const {password,updateAt, ...other} = user._doc;
        res.status(200).json({other});
    }catch(error){
        res.status(404).json({
            message:"User not found",
        })
    }
});
// Follow operation
router.put("/:id/Follow", async (req, res) => {
    try {
        // Check if the user making the request and the requested user are different
        if (req.body.userId !== req.params.id) {
            const user = await User.findById(req.params.id);
            const currentUser = await User.findById(req.body.userId);

            if (!user) {
                return res.status(404).json({ message: "Requested user not found" });
            }

            if (!currentUser) {
                return res.status(404).json({ message: "Current user not found" });
            }

            // Check if the user is already being followed
            if (!user.followers.includes(req.body.userId)) {
                await user.updateOne({ $push: { followers: req.body.userId } });
                await currentUser.updateOne({ $push: { followings: req.params.id } });
                return res.status(200).json({ message: "User has been followed" });
            } else {
                return res.status(400).json({ message: "You already follow this user" });
            }
        } else {
            return res.status(400).json({ message: "You can't follow yourself" });
        }
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
});
// Unfollow operation
router.put("/:id/unfollow", async (req, res) => {
    try {
        // Check if the user making the request and the requested user are different
        if (req.body.userId !== req.params.id) {
            const user = await User.findById(req.params.id);
            const currentUser = await User.findById(req.body.userId);

            if (!user) {
                return res.status(404).json({ message: "Requested user not found" });
            }

            if (!currentUser) {
                return res.status(404).json({ message: "Current user not found" });
            }

            // Check if the user is already being followed
            if (user.followers.includes(req.body.userId)) {
                await user.updateOne({ $pull: { followers: req.body.userId } });
                await currentUser.updateOne({ $pull: { followings: req.params.id } });
                return res.status(200).json({ message: "User has been unfollowed" });
            } else {
                return res.status(400).json({ message: "You are not following this user" });
            }
        } else {
            return res.status(400).json({ message: "You can't unfollow yourself" });
        }
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
});

module.exports = router;