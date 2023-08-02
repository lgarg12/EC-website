import React, { useState } from 'react'
import {BsThreeDotsVertical} from "react-icons/bs"
import {Users} from "../dummyData"
export default function Post({post}) {
    const [like,setLike] = useState(post.like);
    const [isliked,setIsLiked] = useState(true);
    const [isDisLiked,setIsDisLiked] = useState(true);
    function handleLike(){
        setLike(isliked ? like + 1 : like);
        setIsLiked(false);
        setIsDisLiked(true);
    }
    function handleDisLike(){
        if(like > 0){
            setLike(isDisLiked ? like - 1 : like);
            setIsDisLiked(false);
            setIsLiked(true);
        }
    }
  return (
    <div>
        <div className='shadow-lg rounded-lg m-4'>
            <div className='m-2 space-y-2'>
                <div className='flex justify-between items-center'>
                    <div className='flex gap-2 items-center'>
                        <img src={Users.filter(u => u.id === post.userId)[0].profilePicture} alt="" className='rounded-full h-10 w-10 object-cover'/>
                        <div className='flex gap-2'>
                            <span className='font-semibold'>{Users.filter(u => u.id === post.userId)[0].username}</span>
                            <span>{post.date}</span>
                        </div>
                    </div>
                    <BsThreeDotsVertical className='text-2xl'/>
                </div>
                <div>
                {post.desc}
                </div>
                <img src={post.photo} alt=""  className='rounded-lg'/>
                <div>
                    <div className='flex gap-2 items-center'>
                        <img src="/Assest/like.png" alt="" className='h-10 w-10' onClick={handleLike}/>
                        <img src="/Assest/heart.png" alt="" className='h-10 w-10' onClick={handleDisLike}/>
                        <div>
                            <span> {like} </span>
                            People's like
                        </div>
                    </div>
                    <div>
                        <span> {post.comment} </span> comment's
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
