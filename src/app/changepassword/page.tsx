"use client"
import { isMatchPassword, isValidPassword } from '@/utils/validation/validate';
import { Lock, Visibility, VisibilityOff } from '@mui/icons-material';
import React, { useReducer, useState } from 'react'

const page = () => {
    const [err, setErr] = useState({
        passwordError: "",
        confirmPasswordError: "",
      });
      const [oldVisiblity, setOldVisibility] = useState(false);
      const [newVisiblity, setNewVisibility] = useState(false);
      const initialState = {
    
        password: "",
        confirmPassword: "",
     
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
    const handleSubmit=()=>{}
  return (
    <div className='min-h-[calc(100vh-10rem)] flex justify-center items-center'>
        <div className=' w-1/4 shadow-2xl shadow-transparent/50 p-5 rounded-md my-20'>
        <h1 className="text-3xl m-8 text-center text-pink-500 font-bold">
         Change Password
        </h1>
        <form onSubmit={handleSubmit}>
        <div className="relative m-6">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
            <Lock color="disabled" />
          </div>
          <input
            type={oldVisiblity? "text" : "password"}
            id="input-group-1"
            name="oldPassword"
            className="border text-sm rounded-lg shadow shadow-transparent/40 block w-full ps-12 p-2.5 "
            placeholder="Old Password *"
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
                  onClick={() => setOldVisibility(!oldVisiblity)}
                >
                  {oldVisiblity ? (
                    <VisibilityOff color="disabled" />
                  ) : (
                    <Visibility color="disabled" />
                  )}
                </div>
        </div>
        <div className="m-6">
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                  <Lock color="disabled" />
                </div>
                <input
                  type={newVisiblity ? "text" : "password"}
                  id="input-group-1"
                  className={`border ${
                    !err.passwordError ? "" : "border-red-500"
                  } text-sm rounded-lg shadow shadow-transparent/40 block w-full ps-12 p-2.5 `}
                  name="newPassword"
                  placeholder="New Password *"
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
                  onClick={() => setNewVisibility(!newVisiblity)}
                >
                  {newVisiblity ? (
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
               Submit
              </button>
            </div>
        </form>
        </div>
    </div>
  )
}

export default page
