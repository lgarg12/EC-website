const User = require("../Models/User");
const router = require("express").Router();

// Update operation
router.put("/:id",async(req,res)=>{
    if(req.body.userId == req.params.id || req.user.isAdmin){
        if(req.body.password){
            try{
                const salt = await bcrypt.genSalt(10);
                req.body.password = await bcrypt.hash(req.body.password,salt);

            }catch(error){
                return res.status(403).json({message:error});
            }
        }
        try{
            const user = await User.findByIdAndUpdate(req.params.id,{$set:req.body,});
            req.status(200).json({message:"Account has been updated",user});
        }catch(error){
            return res.status(500).json(error);
        }
    }
    else{
        return res.status(401).json({message:"You can update only your account!"});
    }
});
// Delete operation
router.put("/:id",async(req,res)=>{
    if(req.body.userId == req.params.id || req.user.isAdmin){
        try{
            const user = await User.findByIdAndDelete(req.params.id);
            req.status(200).json({message:"Account has been updated",user});
        }catch(error){
            return res.status(500).json(error);
        }
    }
    else{
        return res.status(401).json({message:"You can Delete only your account!"});
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
// follow
 router.put("/:id",async(req,res)=>{
    if(req.body.userId !== req.params.id){
        try{
            const user = await User.findById(req.params.id);
            const currentUser = await User.findById(req.body.userId);
            if(!user.followers.includes(req.body.userId)){
                await user.updateOne({$push:{followers:req.body.userId}});
                await currentUser.updateOne({$push:{followings:req.params.id}});
                res.status(200).json("user has been followed");
            }
            else{
                res.status(403).json("you already follow this user");
            }
        }catch(error){
            res.status(403).json("You can't follow yourself");
        }
    }
 });
 // Unfollow
 router.put("/:id",async(req,res)=>{
    if(req.body.userId !== req.params.id){
        try{
            const user = await User.findById(req.params.id);
            const currentUser = await User.findById(req.body.userId);
            if(user.followers.includes(req.body.userId)){
                await user.updateOne({$pull:{followers:req.body.userId}});
                await currentUser.updateOne({$pull:{followings:req.params.id}});
                res.status(200).json("user has been unfollowed");
            }
            else{
                res.status(403).json("you already unfollow this user");
            }
        }catch(error){
            res.status(403).json("You can't unfollow yourself");
        }
    }
 });


module.exports = router;