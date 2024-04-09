import Image from "next/image";
import React from "react";

const Writer = () => {
  return (
    <div className="w-3/5 mx-auto min-h-[calc(100vh-10rem)]">
 
      <div className="flex flex-wrap ">
      <div className="font-bold text-2xl text-center">Writers</div>
        {[0, 1, 2, 3, 4].map((item) => (
          <div className="flex items-center rounded-md shadow-sm shadow-transparent/50 py-5 pr-20 pl-5 mx-5 ">
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
