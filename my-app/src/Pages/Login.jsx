import React from 'react'

export default function Login() {
  return (
    <div className='flex items-center justify-center h-screen bg-gray-200'>
        <div className='flex gap-4 items-center'>
            <div className='flex-col'>
                <div className='text-4xl text-blue-500 font-bold'>Lamasocial</div>
                <div className='text-xl'>Connect with your friends and the world around you Lamasocial</div>
            </div>
            <div className='max-w-md mx-auto p-6 bg-white rounded-lg shadow-md'>
                <input
                  type='text'
                  placeholder='Email'
                  className='w-full mb-4 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200'
                />
                <input
                  type='password'
                  placeholder='Password'
                  className='w-full mb-4 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200'
                />
                <button className='w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg'>
                  Log In
                </button>
                <a href="#" className='block text-center mt-2 text-blue-500 hover:text-blue-600'>
                  Forgot Password?
                </a>
                <button className="mt-4 w-full bg-green-300 hover:bg-green-400 text-white font-bold py-2 px-4 rounded-lg">
                  Create a New Account
                </button>
            </div>

        </div>
    </div>

  )
}
