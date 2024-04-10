"use client";
import { data } from "@/utils/client/fetch";
import { postInterface } from "@/utils/client/propsTypes";
import Image from "next/image";

import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const PostCards = () => {
  const category=useSearchParams().get("category");
  console.log(category);
  const router = useRouter()
  const [posts, setPosts] = useState<null | postInterface[]>(null);
  useEffect(() => {
    setPostsData();
  });
  const setPostsData = async () => {
    // const data=await fetchPosts()
    setPosts(data);
  };
  return (
    <div className="w-3/4  mx-auto my-10" >
      <h1 className="text-4xl font-bold text-center text-pink-500   mb-5">{category} Posts</h1>
      <div className="flex flex-wrap  ">
      {posts ? (
        posts.slice(0,8).map((post) => (
          <div className=" rounded-lg overflow-hidden shadow-xl mx-3 my-5" style={{width:300}} onClick={()=>router.push(`/posts/${post.id}`)}>
  <Image  src="/blog.png"   alt="error loading images" width={300} height={300}/>
  <div className="px-6 py-4">
    <div className="font-bold text-base mb-2">{post.title.length>25?`${post.title.slice(0,25)}...`:post.title}</div>
    <p className="text-gray-700 text-sm">
    {post.body.slice(0,80)}...
    </p>
  </div>
  <div className="px-6 pt-3 pb-2 flex items-center mb-4">
  <Image className='rounded-lg aspect-square object-cover ' src="/blog.png"  alt="Not available..." width={30} height={30}/>
  <div className="mx-4" >
  <div className="text-xs font-bold">By: Falgun Mahajan</div>
  <div className="text-xs text-gray-400">25 minutes ago</div>
  </div>
  </div>
</div>
     
        ))
      ) : (
        <div className="text-center text-gray-400">No Post Available for this category</div>
      )}
      </div>
    </div>
  );
};

export default PostCards;

