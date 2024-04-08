"use client";
import {
  isMatchPassword,
  isValidContact,
  isValidData,
  isValidEmail,
  isValidFullName,
  isValidPassword,
} from "@/utils/validation/validate";
import {
  Call,
  Lock,
  Mail,
  Person,
  Try,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import axios from "axios";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import React, { SyntheticEvent, useReducer, useState } from "react";

const page = () => {
  const role = useSearchParams().get("role");
  const initialState = {
    fullName: "",
    email: "",
    mobileNumber: "",
    password: "",
    confirmPassword: "",
    role,
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
  const [boolMsg, msg] = isValidData(state);
  const [err, setErr] = useState({
    fullNameError: "",
    emailError: "",
    contactError: "",
    passwordError: "",
    confirmPasswordError: "",
  });
  const [visiblity, setVisibility] = useState(false);
  const router = useRouter();
  const [errMsg, setErrMsg] = useState("");
  const handleSubmit = async (e: SyntheticEvent) => {
    console.log(boolMsg, msg);

    e.preventDefault();
    if (boolMsg) {
      try {
        setErrMsg("")
        const res = await axios.post(`/api/auth/signup`, state);
        localStorage.setItem("token", res.data.token);
        router.push("/");
      } catch (error:any) {
        setErrMsg(error.response.data.message)
      }
    } else {
      setErrMsg("Please fill all the required fields with valid data");
    }
  };
  return (
    <div>
         
      <div className="min-h-[calc(100vh-10rem)] flex items-center justify-center">
      
        <div className="lg:w-1/4 sm:w-1/2   shadow-2xl shadow-transparent/50 p-5 rounded-md">
        {errMsg && <div role="alert">
        <div className=" bg-red-100 border border-red-400 text-red-700 text-center rounded px-4 py-2">
        {errMsg}
        </div>
      </div> }
          <h1 className="text-3xl m-8 text-center text-pink-500 font-bold">
            Sign Up
          </h1>
          <form onSubmit={handleSubmit}>
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
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                  <Lock color="disabled" />
                </div>
                <input
                  type={visiblity ? "text" : "password"}
                  id="input-group-1"
                  className={`border ${
                    !err.passwordError ? "" : "border-red-500"
                  } text-sm rounded-lg shadow shadow-transparent/40 block w-full ps-12 p-2.5 `}
                  name="password"
                  placeholder="Password *"
                  onBlur={(e) => {
                    if (!isValidPassword(e.target.value))
                      setErr({
                        ...err,
                        passwordError:
                          "Password must contain atleast 1 uppercase letter, 1 lowercase letter, 1 digit, 1 special character and must be of length 8!",
                      });
                    else setErr({ ...err, passwordError: "" });
                  }}
                  onChange={(e) =>
                    dispatch({
                      type: "change",
                      key: e.target.name,
                      value: e.target.value,
                    })
                  }
                />
                <div
                  className="absolute inset-y-0 end-0 flex items-center pe-3.5 "
                  onClick={() => setVisibility(!visiblity)}
                >
                  {visiblity ? (
                    <VisibilityOff color="disabled" />
                  ) : (
                    <Visibility color="disabled" />
                  )}
                </div>
              </div>
              <p className="  text-red-500 text-xs">{err.passwordError}</p>
            </div>

            <div className="m-6">
              <div className="relative ">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                  <Lock color="disabled" />
                </div>
                <input
                  type="password"
                  id="input-group-1"
                  className={`border ${
                    !err.confirmPasswordError ? "" : "border-red-500"
                  } text-sm rounded-lg shadow shadow-transparent/40 block w-full ps-12 p-2.5 `}
                  name="confirmPassword"
                  placeholder="Confirm Password *"
                  onBlur={(e) => {
                    if (!isMatchPassword(state.password, e.target.value))
                      setErr({
                        ...err,
                        confirmPasswordError:
                          "Password and confirm password must be same!",
                      });
                    else setErr({ ...err, confirmPasswordError: "" });
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
              <p className="  text-red-500 text-xs">
                {err.confirmPasswordError}
              </p>
            </div>

            <div className="m-6">
              <button className="border rounded-lg w-full p-2.5 bg-pink-500 text-white shadow shadow-transparent/20 ">
                Sign Up
              </button>
            </div>
          </form>
          <div className="m-8 text-center text-base text-gray-400">
            Already have an account?
            <Link className="text-pink-500" href="/login">
              {" "}
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
