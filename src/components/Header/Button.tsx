"use client";
import { buttonProps } from "@/utils/client/propsTypes";
import React  from "react";
import ButtonLink from "../ButtonLink";
import { useRouter } from "next/navigation";


const Button = ({ text, link }: buttonProps) => {
const router=useRouter()
  return (
    <ButtonLink isOpen={text==="Sign In" || text==="profile"} isAdminLink={true} text={text}>
    
      <button className="bg-pink-500 mx-3 rounded-lg py-1 px-3 hover:bg-blue-400" onClick={()=>{
        if(text!=="Sign Up" || text!=="profile"){
          router.push(link)
        }
      }}>
        {text}
      </button>
      </ButtonLink>
    
  );
};

export default Button;
