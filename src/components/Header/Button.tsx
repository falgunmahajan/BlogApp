"use client";
import { buttonProps } from "@/utils/client/propsTypes";
import { useRouter } from "next/navigation";

import React, { useState } from "react";


const Button = ({ text, link }: buttonProps) => {
  const [display, setDisplay] = useState("hidden");
  const router = useRouter();

  const handleClick = (role:String) => {
    setDisplay("hidden")
    router.push( `/signup?role=${role}`);
  };
  return (
    <div
      className="flex flex-col relative "
      onMouseEnter={() => setDisplay("")}
      onMouseLeave={() => setDisplay("hidden")}
    >
      <button className="bg-pink-500 rounded-lg py-1 px-3 hover:bg-blue-400" onClick={()=>{
        if(text!=="Sign Up"){
          router.push(link)
        }
      }}>
        {text}
      </button>
      {text === "Sign Up" && (
        <div
          className={`${display} absolute right-0 z-10 mt-8 shadow px-8 py-3 rounded-md bg-slate-100  text-gray-500`}
        >
          <ul>
            <li
              className="mb-2 cursor-pointer"
              onClick={() => {
                setDisplay("hidden")
                router.push("/admin")
              }}
            >
              Admin
            </li>
            <hr />
            <li className="my-2 cursor-pointer" onClick={()=>handleClick("Writer")}>
              Writer
            </li>
            <hr />
            <li className="my-2 cursor-pointer" onClick={()=>handleClick("Reader")}>
              Reader
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Button;
