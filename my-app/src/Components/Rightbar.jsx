import React from 'react';
import { Users } from '../dummyData';

export default function Rightbar() {
  const HomePage = () => (
    <div className='basis-1/2 mt-3 space-y-4'>
      <div className='flex items-center gap-2'>
        <img src="/Assest/gift.png" alt="" className='w-10 h-10' />
        <b> Name </b>and <b> 3 other friends</b> have birthday today
      </div>
      <img src="/Assest/ad.png" alt="" className='rounded-lg' />
      <div className='space-y-4'>
        <div className='text-xl font-semibold'>Online Friends</div>
        {Users.map(u => (
          <div className='flex gap-2 items-center relative' key={u.id}>
            <img src={u.profilePicture} alt="" className='h-10 w-10 rounded-full object-cover' />
            <div className='text-xl'>{u.username}</div>
            <div className='h-2 w-2 rounded-full border-5 border-white bg-green-500 absolute top-0 left-0' />
          </div>
        ))}
      </div>
    </div>
  );

  const ProfilePage = () => (
    <div className='space-y-3 mt-3'>
      <div className='text-xl font-semibold'>
        <p>User Information</p>
      </div>
      <div className='flex gap-2'>
        <span className='text-gray-500'>City:</span>
        <span className='text-gray-800'>New York</span>
      </div>
      <div className='flex gap-2'>
        <span className='text-gray-500'>From:</span>
        <span className='text-gray-800'>Madrid</span>
      </div>
      <div className='flex gap-2'> 
        <span className='text-gray-500'>Relationship:</span>
        <span className='text-gray-800'>Single</span>
      </div>
      <div className='text-xl'>User Friends</div>
      <div className='space-y-4'>
        {
          Users.map(u => (
            <div className='space-y-3'>
              <img src={u.profilePicture} alt="" className='h-[100px] w-[100px] rounded-lg object-cover'/>
              <span>{u.username}</span>
            </div>
          ))
        }
      </div>
    </div>
  )

  return (
    <div>
      {/* <HomePage/> */}
      <ProfilePage/>
    </div>
  );
}