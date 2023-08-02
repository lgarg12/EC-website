import React from 'react'
import { FaWifi, FaBell, FaCog, FaCommentAlt, FaVideo, FaBookmark, FaQuestion, FaBriefcase, FaCalendarAlt } from 'react-icons/fa';
import { Users } from '../dummyData';

export default function Leftbar() {
  return (
    <div className='basis-1/2 flex-col space-y-4 ml-4 w-1/2 overflow-y-scroll mt-4' style={{ height: 'calc(100vh - 89px)' }}>
        <div className="flex-col items-center space-y-8 ">
          <div className="flex items-center">
            <FaWifi className="text-2xl" />
            <span className="ml-2">Wi-Fi</span>
          </div>
          <div className="flex items-center">
            <FaBell className="text-2xl" />
            <span className="ml-2">Notifications</span>
          </div>
          <div className="flex items-center">
            <FaCog className="text-2xl" />
            <span className="ml-2">Settings</span>
          </div>
          <div className="flex items-center">
            <FaCommentAlt className="text-2xl" />
            <span className="ml-2">Chats</span>
          </div>
          <div className="flex items-center">
            <FaVideo className="text-2xl" />
            <span className="ml-2">Video</span>
          </div>
          <div className="flex items-center">
            <FaBookmark className="text-2xl" />
            <span className="ml-2">Bookmark</span>
          </div>
          <div className="flex items-center">
            <FaQuestion className="text-2xl" />
            <span className="ml-2">Questions</span>
          </div>
          <div className="flex items-center">
            <FaBriefcase className="text-2xl" />
            <span className="ml-2">Jobs</span>
          </div>
          <div className="flex items-center">
            <FaCalendarAlt className="text-2xl" />
            <span className="ml-2">Events</span>
          </div>
        </div>

        <button className="px-4 py-2 rounded-md border-2 bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-opacity-50 focus:ring-0">
              Show More
        </button>
        
        <div className='h-1 rounded-md bg-gray-200'/>

        <div className='flex-col space-y-4'>
          {
            Users.map(u => (
              <div className='flex gap-2 items-center'>
                <img src={u.profilePicture} alt="userFriends pic" className='rounded-full w-20 h-20 object-cover'/>
                <div>
                  {u.username}
                </div>
              </div>
            ))
          } 
        </div>
    </div>
  )
}
