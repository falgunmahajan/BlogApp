import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const ButtonLink = ({
  children,isOpen, isAdminLink,text
}: Readonly<{
  children: React.ReactNode;
  isOpen:Boolean,
  isAdminLink:Boolean,
  text:String
}>) => {
  const [display, setDisplay] = useState("hidden");
  const router = useRouter();

  const handleClick = (role: String) => {
    setDisplay("hidden");
    router.push(`/signup?role=${role}`);
  };
  return (
    <div
      className="flex flex-col relative "
      onMouseEnter={() => setDisplay("")}
      onMouseLeave={() => setDisplay("hidden")}
    >
      {text!=="profile"?children:<Image className='rounded-full aspect-square object-cover' src="/blog.png"  alt="Not available..." width={35} height={30}/>}
     
      { isOpen && (<div
          className={`${display} absolute right-0 z-10 mt-8 shadow px-8 py-3 rounded-md bg-slate-100  text-gray-500`}
        >
          <ul>
            {isAdminLink  &&<><li
              className="mb-2 cursor-pointer"
              onClick={() =>
                { if(text!=="profile")
                  {
                    setDisplay("hidden");
                    router.push("/admin");
                  }
                else {
                  setDisplay("hidden");
                  router.push("/profile")}
              }} 
            >
              {text!=="profile"?"Admin":"Profile"}
              
            </li>
            <hr /></> }
            <li
              className="my-2 cursor-pointer"
              onClick={() =>{ if(text!=="profile")
                handleClick("writer")
              else {
                setDisplay("hidden");
                router.push("/changepassword")}
            }}
            >
              {text!=="profile"?"Writer":"Change Password"}
            </li>
            <hr />
            <li
              className="my-2 cursor-pointer"
              onClick={() =>{ if(text!=="profile")
                handleClick("reader")
              else {
                setDisplay("hidden");
                router.push("/signout")}
            }}
            >
                {text!=="profile"?"Reader":<span className="text-red-600">SignOut</span>}
              
            </li>
          </ul>
        </div>)
   }
    </div>
  );
};

export default ButtonLink;
