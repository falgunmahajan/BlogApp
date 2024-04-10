import Categories from "@/components/Home/Categories";

import PostsWithPopular from "@/components/Home/PostsWithPopular";
import PostCards from "@/components/PostCards";


import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div >
      <div className="w-3/4 mx-auto p-10 bg-slate-950 flex items-center mt-10 mb-20 text-white">
        <div className=" mx-24">
          <Image
            className="rounded-full aspect-square object-cover border-4"
            src="/blog.png"
            alt="Not available..."
            width={180}
            height={180}
          />
        </div>
        <div className=" flex flex-col">
          <h1 className="text-5xl mb-5 ">Falgun Mahajan</h1>
          <div className="flex justify-center">
            <div className="flex flex-col mx-5 ">
              <span className="font-bold text-xl text-center">2</span>
              <span >Followers</span>
            </div>
            <div className="flex flex-col mx-5">
              <span className="font-bold text-xl text-center">4</span>
              <span >Posts</span>
            </div>
          </div>
          <button className="bg-blue-400 text-white font-bold py-2 px-4 mx-auto rounded mt-5 w-1/4">Follow</button>
          {/* <button className=" text-white font-bold   mx-auto rounded-lg mt-5 w-2/5 border  border-white">Following</button> */}
        </div>
      </div>
      <Categories/>
      {/* <div className="w-3/4 m-auto mt-20"> */}

     <PostCards/>
      
    </div>
  );
};

export default page;
