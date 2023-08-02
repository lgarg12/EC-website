import React from 'react'
import "./Share.css"
import {BiSolidPhotoAlbum} from "react-icons/bi"
import {BsEmojiSmile} from "react-icons/bs"
import {HiOutlineLocationMarker} from "react-icons/hi"
import {AiOutlineTag} from "react-icons/ai"

export default function Share() {
  return (
    <div className="box-with-shadow bg-white rounded-lg shadow-lg m-4">
        <div className='m-2 flex-col space-y-2'>
            <div className='flex gap-3'>
              <img src="/Assest/person/3.jpeg" alt="" className='rounded-full object-cover h-20 w-20'/>
              <input placeholder='What U think'/>
            </div>
            <div className='h-1 bg-gray-200 rounded-lg'/>
            <div className='flex gap-4'>
                <div className='flex gap-2 items-center'>
                    <BiSolidPhotoAlbum/>
                    <span>Photo's and Video's</span>
                </div>
                <div className='flex gap-2 items-center'>
                    <AiOutlineTag/>
                    <span>Tag</span>
                </div>
                <div className='flex gap-2 items-center'>
                    <HiOutlineLocationMarker/>
                    <span>Location</span>
                </div>
                <div className='flex gap-2 items-center'>
                    <BsEmojiSmile/>
                    <span>Reaction</span>
                </div>
            </div>
            <button className="px-4 py-2 rounded-md border-2 bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-opacity-50 focus:ring-0">Share</button>
        </div>
    </div>
  )
}
