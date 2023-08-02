import React from 'react'
import Rightbar from "../Components/Rightbar";
import Topbar from "../Components/Topbar";
import Feed from "../Components/Feed";
import Leftbar from "../Components/Leftbar";

export default function Profile() {
  return (
    <div>
        <Topbar/>
        <div className="flex">
            <Leftbar/>
            <div className='flex-col'>
                <div className='mt-3'>
                <div className='mt-3 relative'>
                    <img src="/Assest/post/9.jpeg" alt="" className='h-[400px] w-full object-cover rounded-lg' />
                    <img src="/Assest/person/1.jpeg" alt="" className='absolute bottom-0 left-1/2 transform -translate-x-1/2 h-[100px] w-[100px] rounded-full object-cover border-white border-4' />
                </div>

                </div>
                <div className='flex'>
                    <Feed/>
                    <Rightbar/>
                </div>
            </div>
        </div>
    </div>
  )
}
