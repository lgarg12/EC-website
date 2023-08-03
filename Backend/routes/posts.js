const router = require("express").Router();
const Post = require("../Models/Post");
const User = require("../Models/User");

// Create a post
router.post("/",async(req,res)=>{
    const new_post = new Post(req.body);
    try{
        const savePost = await new_post.save();
        res.status(200).json({
            message:"Post has been saved"
        });
    }catch(error){
        res.status(500).json(error);
    }
});
// update a post
router.put("/:id", async(req,res)=>{
    try{
        const post = await Post.findById(req.params.id);
        if(post.userId === req.body.userId){
            await post.updateOne({$set:req.body});
            res.status(200).json("The post has been updated");
        }else{
            res.status(403).json("You can update only your post");
        }
    } catch(err){
        res.status(500).json(err);
    }
});
// delete a post
router.delete("/:id", async(req,res)=>{
    try{
        const post = await Post.findById(req.params.id);

        if(!post){
            return res.status(404).json({message:"Post not found"})
        }

        if(post.userId === req.body.userId){
            await post.deleteOne();
            res.status(200).json("The post has been updated");
        }else{
            res.status(403).json("You can update only your post");
        }
    } catch(err){
        res.status(500).json(err);
    }
});
// like a post
router.put("/:id/like",async(req,res)=>{
    try{
        const post = await Post.findById(req.params.id);
        if(!post.likes.includes(req.body.userId)){
            await post.updateOne({$push:{likes:req.body.userId}});
            res.status(500).json("The post has been liked");
        }else{
            await post.updateOne({$pull:{likes:req.body.userId}});
            res.status(200).json({
                message:"The post has been disliked"
            });
        }
    }catch(error){
        res.status(500).json(error);
    }
});
// // get a post
// router.get("/:id", async (req, res) => {
//     try {
//         const post = await Post.findById(req.params.id);

//         if (!post) {
//             return res.status(404).json({ message: "Post not found" });
//         }

//         res.status(200).json(post);
//     } catch (error) {
//         res.status(500).json({ message: "Internal server error", error: error.message });
//     }
// });

// get all post
router.get("/timelines", async (req, res) => {
    try {
        const currentUser = await User.findById(req.body.userId);
        if(!currentUser){
            return res.status(404).json({message:"User of this id is not registered"})
        }
        const userPosts = await Post.find({ userId: currentUser._id });
        console.log("Chl ja ")
        const friendPostsPromises = currentUser.followings.map(async (friendId) => {
            const friendPosts = await Post.find({ userId: friendId });
            return friendPosts;
        });
        
        // const friendPosts = await Promise.all(friendPostsPromises);
        // const combinedPosts = userPosts.concat(...friendPosts);
        // console.log(combinedPosts);

        // Concatenate userPosts and friendPosts arrays using the spread operator
        res.status(200).json(userPosts);
    } catch (error) {
        res.status(500).json({message:"Error server side",error});
    }
    // const currentUser = await User.findById(req.body.userId);
    // if(!currentUser){
    //     return res.status(404).json({message:"User of this id is not registered"})
    // }
    // const userPosts = await Post.find({ userId: currentUser._id });
    // console.log("Chl ja ")
    // const friendPostsPromises = currentUser.followings.map(async (friendId) => {
    //     const friendPosts = await Post.find({ userId: friendId });
    //     return friendPosts;
    // });
    
    // // const friendPosts = await Promise.all(friendPostsPromises);
    // // const combinedPosts = userPosts.concat(...friendPosts);
    // // console.log(combinedPosts);
    // // Concatenate userPosts and friendPosts arrays using the spread operator
    // res.status(200).json(userPosts);
});


module.exports = router;