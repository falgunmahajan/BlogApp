"use client";
import { data } from "@/utils/client/fetch";
import { postInterface } from "@/utils/client/propsTypes";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const Posts = () => {
  const category=useSearchParams().get("category");
  console.log(category);
  
  const [posts, setPosts] = useState<null | postInterface[]>(null);
  useEffect(() => {
    setPostsData();
  });
  const setPostsData = async () => {
    // const data=await fetchPosts()
    setPosts(data);
  };
  return (
    <div className="w-3/5  ">
      {category ?<h1 className="text-4xl font-bold  mb-5">{category} Posts</h1>  :<h1 className="text-2xl font-bold mb-5"></h1> }
   
      {posts ? (
        posts.slice(0,3).map((post) => (
//      
          <div className=" flex justify-evenly mb-20 ">
            <div className="w-1/2">
              <Image
                src="/blog.png"
                alt="error loading images"
                width={350}
                height={500}
              />
            </div>
            <div className="w-1/2">
              <div className="mb-3">
                <span className="text-sm mr-2 text-gray-500">Tue Nov 30 2023</span>
                <span className="text-base mr-2 text-pink-500 font-bold">
                  Coding
                </span>
              </div>
              <h1 className="font-bold text-xl mb-3">{post.title}</h1>
              <div className="mb-3">{post.body.slice(0,80)}...</div>
              <Link className="text-red-500" href={`/posts/${post.id}`}>Read More </Link>
            </div>
          </div>
        ))
      ) : (
        <div className="text-center text-gray-400">No Post Available for this category</div>
      )}
      {/* </div> */}
    </div>
  );
};

export default Posts;
