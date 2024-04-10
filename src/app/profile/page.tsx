"use client"
import { isValidContact, isValidEmail, isValidFullName } from "@/utils/validation/validate";
import { Call, CameraAlt, Mail, Person } from "@mui/icons-material";
import Image from "next/image";
import React, { useReducer, useState } from "react";

const page = () => {
    const initialState = {
        fullName: "",
        email: "",
        mobileNumber: "",
      };
      const reducer = (state: any, action: any) => {
        switch (action.type) {
          case "change":
            return {
              ...state,
              [action.key]: action.value,
            };
        }
      };
      const [state, dispatch] = useReducer(reducer, initialState);
      
      const [err, setErr] = useState({
        fullNameError: "",
        emailError: "",
        contactError: "",
      });
  return (
    <div className="min-h-[calc(100vh-10rem)] flex justify-center items-center">
      <div className=" w-1/4 shadow-2xl shadow-transparent/50 p-5 rounded-md my-20">
        <h1 className="text-3xl m-8 text-center text-pink-500 font-bold">
          My Profile
        </h1>
        <div className="relative  w-40 h-40 mx-auto mt-10">
          <Image
            className=" rounded-full aspect-square object-cover border-4 "
            src="/Avatar.jpg"
            alt="Image Not Loading..."
            width={150}
            height={150}
          />
          <input
            type="file"
            hidden
            name="Image"
            id = "image"
            accept=".jpg, .jpeg, .png"
          />
          <label htmlFor="image" className="absolute bottom-1 right-4 bg-black rounded-full p-2"><CameraAlt sx={{color:"white"}}/></label>
        </div>
        <div className="mt-8" >
     
        <form>
        <div className="m-6">
              <div className="relative ">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                  <Person color="disabled" />
                </div>

                <input
                  type="text"
                  id="input-group-1"
                  className={`border ${
                    !err.fullNameError ? "" : "border-red-500"
                  } text-sm rounded-lg shadow shadow-transparent/40 block w-full ps-12 p-2.5 `}
                  name="fullName"
                  placeholder="Full Name *"
                  onBlur={(e) => {
                    if (!isValidFullName(e.target.value))
                      setErr({
                        ...err,
                        fullNameError: "Please enter a valid fullname!",
                      });
                    else setErr({ ...err, fullNameError: "" });
                  }}
                  onChange={(e) =>
                    dispatch({
                      type: "change",
                      key: e.target.name,
                      value: e.target.value,
                    })
                  }
                />
              </div>
              <p className="  text-red-500 text-xs">{err.fullNameError}</p>
            </div>
            <div className="m-6">
              <div className="relative ">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                  <Mail color="disabled" />
                </div>
                <input
                  type="text"
                  id="input-group-1"
                  className={`border ${
                    !err.emailError ? "" : "border-red-500"
                  } text-sm rounded-lg shadow shadow-transparent/40 block w-full ps-12 p-2.5 `}
                  name="email"
                  placeholder="Email Address *"
                  onBlur={(e) => {
                    if (!isValidEmail(e.target.value))
                      setErr({
                        ...err,
                        emailError: "Please enter a valid email!",
                      });
                    else setErr({ ...err, emailError: "" });
                  }}
                  onChange={(e) =>
                    dispatch({
                      type: "change",
                      key: e.target.name,
                      value: e.target.value,
                    })
                  }
                />
              </div>
              <p className="  text-red-500 text-xs">{err.emailError}</p>
            </div>
            <div className="m-6">
              <div className="relative ">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                  <Call color="disabled" />
                </div>
                <input
                  type="text"
                  id="input-group-1"
                  className={`border ${
                    !err.contactError ? "" : "border-red-500"
                  } text-sm rounded-lg shadow shadow-transparent/40 block w-full ps-12 p-2.5`}
                  name="mobileNumber"
                  placeholder="Mobile Number *"
                  onBlur={(e) => {
                    if (!isValidContact(e.target.value))
                      setErr({
                        ...err,
                        contactError: "Please enter a valid phonenumber!",
                      });
                    else setErr({ ...err, contactError: "" });
                  }}
                  onChange={(e) =>
                    dispatch({
                      type: "change",
                      key: e.target.name,
                      value: e.target.value,
                    })
                  }
                />
              </div>
              <p className="  text-red-500 text-xs">{err.contactError}</p>
            </div>
            <div className="m-6">
              <button className="border rounded-lg w-full p-2.5 bg-pink-500 text-white shadow shadow-transparent/20 ">
                Update Profile
              </button>
            </div>
        </form>
        </div>
      </div>
    </div>
  );
};

export default page;
