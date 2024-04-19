import { Delete, DeleteOutline, Lock, Logout, LogoutOutlined, Person } from "@mui/icons-material";
import { signOut } from "next-auth/react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";
import { AiOutlineLogout } from "react-icons/ai";

const ButtonLink = ({
  children,
  isOpen,
  isAdminLink,
  text,
}: Readonly<{
  children: React.ReactNode;
  isOpen: Boolean;
  isAdminLink: Boolean;
  text: String;
}>) => {
  const [display, setDisplay] = useState("hidden");
  const router = useRouter();

  const handleClick = (role: String) => {
    setDisplay("hidden");
    if(text=="Sign Up")router.push(`/signup?role=${role}`);
   else router.push(`/login?role=${role}`);
  };
  return (
    <div
      className="flex flex-col relative  "
      onMouseEnter={() => setDisplay("")}
      onMouseLeave={() => setDisplay("hidden")}
    >
      {text !== "profile" ? (
        children
      ) : (
        <Image
          className="rounded-full aspect-square object-cover mx-3"
          src="/blog.png"
          alt="Not available..."
          width={35}
          height={30}
          
        />
      )}

      {isOpen && (
        <div
          className={`${display} absolute z-10 right-0  mt-8 w-${text==="profile" ?44:"full"}shadow  py-3 rounded-md bg-slate-100  text-gray-500`}
        >
          <ul>
            {isAdminLink && (
              <>
                <li
                  className={`my-2 cursor-pointer px-${text==="profile" ?4:6}`}
                  onClick={() => {
                    if (text !== "profile") {
                      setDisplay("hidden");
                      router.push("/admin");
                    } else {
                      setDisplay("hidden");
                      router.push("/profile");
                    }
                  }}
                >
                  {text !== "profile" ? (
                    "Admin"
                  ) : (
                    <span className="flex items-center">
                      <Person /> <span className="ml-2 text-sm">Profile</span>
                    </span>
                  )}
                </li>
                {text !== "profile" && <hr />}
              </>
            )}
            <li
              className={`my-2 cursor-pointer px-${text==="profile" ?4:6}`}
              onClick={() => {
                if (text !== "profile") handleClick("writer");
                else {
                  setDisplay("hidden");
                  router.push("/changepassword");
                }
              }}
            >
              {text !== "profile" ? (
                "Writer"
              ) : (
                <span className="flex items-center">
                  <Lock /> <span className="ml-2 text-sm">Change Password</span>
                </span>
              )}
            </li>
            {text !== "profile" && <hr />}
            <li
              className={`my-2 cursor-pointer px-${text==="profile" ?4:6}`}
              onClick={() => {
                if (text !== "profile") handleClick("reader");
                else {
                  setDisplay("hidden");
                  signOut()
                }
              }}
            >
              {text !== "profile" ? (
                "Reader"
              ) : (
                <span className=" flex items-center">
                  <LogoutOutlined/> <span className="ml-2 text-sm">SignOut</span>
                </span>
              )}
            </li>
            {text === "profile" && (
              <>
                <hr className="border bg-gray-500 my-3" />
                <li className="my-2 cursor-pointer px-4 text-xs">
                  Danger zone
                </li>
                <li className="my-3 cursor-pointer px-4 text-xs">
                <span className="text-red-600 flex items-center">
                  <DeleteOutline/> <span className="ml-2 text-sm">Delete Account</span>
                </span>
                </li>
              </>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ButtonLink;
