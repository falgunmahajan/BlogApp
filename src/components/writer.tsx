"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const Writer = () => {
  const router = useRouter();
  return (
    <div className="w-3/4 mx-auto my-20 min-h-[calc(100vh-10rem)]">
 <div className="font-bold text-4xl text-center text-pink-500 ">Writers</div>
      <div className="flex flex-wrap mt-10 ">
      
        {[0, 1, 2, 3, 4,5,6,7,8,9].map((item) => (
          <div className="flex items-center cursor-pointer rounded-md shadow-sm shadow-transparent/50 py-5 pr-20 pl-5 mx-16 my-8" onClick={()=>router.push(`/writers/1`)}>
            <Image
              className=" rounded-full aspect-square object-cover mr-4"
              src="/blog.png"
              alt="Avatar of Jonathan Reinink"
              width={40}
              height={40}
            />
            <div className="text-sm">
              <p className="font-bold">Falgun Mahajan</p>
              <div className="flex">
                <p className="text-gray-400 mr-5">2 Followers</p>
                <p className="text-gray-400">4 Posts</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Writer;
