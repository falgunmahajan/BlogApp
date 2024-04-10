"use client";
import Image from "next/image";
import { useParams } from "next/navigation";
import { data } from "@/utils/client/fetch";
import React from "react";
import Popular from "@/components/Home/Popular/Popular";
import Comments from "@/components/Header/Comments";

const page = () => {
  const { postid } = useParams();
  const post = data.find((post) => post.id === Number(postid));
  console.log(post);

  return (
    <>
    <div className="w-4/5 mx-auto flex justify-around items-center p-10 mt-10  ">
      <div className="w-1/2 ">
        <div className="text-4xl font-bold mb-5 ">{post?.title}</div>
        <div className="w-1/2 flex justify-between">
          <span className="text-base text-red-600 font-bold">Fashion</span>
          <span className="text-base text-red-600 font-bold">49 views</span>
        </div>
        <div className="flex items-center w-1/2 mt-5">
          <div className="w-1/6">
            <Image
              className="rounded-full aspect-square object-cover"
              src="/blog.png"
              alt="Not available..."
              width={40}
              height={40}
            />
          </div>

          <div className="w-5/6 text-sm">
            <div className="font-bold">Falgun Mahajan</div>
            <div className="text-gray-500">Mon Nov 20 2023</div>
          </div>
        </div>
      </div>
      <div className="w-1/2 flex justify-center">
        <Image
          src="/blog.png"
          alt="Not available..."
          width={600}
          height={600}
        />
      </div>
    </div>
        <div className="w-4/5 mx-auto flex  p-10  ">
        <div>
        {post?.body}
        <Comments/>
        </div>
       
            {/* <Popular/> */}
        
        </div>
        </>
  );
};

export default page;
