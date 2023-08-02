const router = require("express").Router();
const Post = require("../Models/Post")

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
// get a post
router.get("/:id",async(req,res)=>{
    try{
        const post = Post.findById(req.params.id);
        res.status(200).json(post);
    }catch(error){
        res.status(404).json(error);
    }
});
// get all post
router.get("/timelines",async(req,res)=>{
    let postArray = [];
    try{
        const currentUser = await User.findById(req.body.userId);
        const userPosts = await Post.find({userId:currentUser._id});
        const friendPosts = await Promise.all(
            currentUser.followings.map(friendId=>{
                Post.find({userId:friendId});
            })
        );
        res.status(200).json(userPosts.concat(...friendPosts));
    }catch(error){
        res.status(500).json(error);
    }
});


module.exports = router;