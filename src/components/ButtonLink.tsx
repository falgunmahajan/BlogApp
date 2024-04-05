import { useRouter } from "next/navigation";
import React, { useState } from "react";

const ButtonLink = ({
  children,isOpen, isAdminLink
}: Readonly<{
  children: React.ReactNode;
  isOpen:Boolean,
  isAdminLink:Boolean
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
      {children}
     
      { isOpen && (<div
          className={`${display} absolute right-0 z-10 mt-8 shadow px-8 py-3 rounded-md bg-slate-100  text-gray-500`}
        >
          <ul>
            {isAdminLink &&<><li
              className="mb-2 cursor-pointer"
              onClick={() => {
                setDisplay("hidden");
                router.push("/admin");
              }}
            >
              Admin
            </li>
            <hr /></> }
            <li
              className="my-2 cursor-pointer"
              onClick={() => handleClick("Writer")}
            >
              Writer
            </li>
            <hr />
            <li
              className="my-2 cursor-pointer"
              onClick={() => handleClick("Reader")}
            >
              Reader
            </li>
          </ul>
        </div>)
   }
    </div>
  );
};

export default ButtonLink;
