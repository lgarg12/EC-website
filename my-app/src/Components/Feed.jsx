import React from 'react'
import Share from './Share'
import Post from './Post'
import { Posts as post } from '../dummyData';

export default function Feed() {
  return (
    <div className='basis-1/2'>
      <Share/>
      {
        post.map((p)=>(
          <Post key={p.id} post={p}/>
        ))
      }
    </div>
  )
}
