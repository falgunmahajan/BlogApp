import React from 'react'
import Posts from './Posts'
import Popular from './Popular/Popular'

const PostsWithPopular = () => {
  return (
    <div className="w-3/4 mx-auto flex justify-between my-20" >

   <Posts/>
   <Popular/>
   </div>
  )
}

export default PostsWithPopular
