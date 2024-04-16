"use client";
import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import categories from "../../categories.json";
import Link from "next/link";
type CreateProps = {
  type: String;
};
const formats = [
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "color",
  "clean",
];

const modules = {
  toolbar: [
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    ["bold", "italic", "underline", "blockquote"],
    [{ color: [] }],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link"],
    ["clean"],
  ],
};

const CreatePost = ({ type }: CreateProps) => {
  const [value, setValue] = useState("");

  return (
    <div className="w-1/2 mx-auto my-20 min-h-[calc(100vh-10rem)]">
      <h1 className="text-3xl text-center font-bold my-3">{type} Post</h1>

      <form>
        <input
          className="w-full border rounded-md my-3 p-3 "
          placeholder="Enter title"
        />
        <select className="w-full border border-gray-200 rounded-md my-3 p-3">
          <option>Select a category</option>
          {categories.map((category) => (
            <option value={category.category}>{category.category}</option>
          ))}
        </select>
        <div className="flex w-full p-5 my-3 justify-between items-center  border ">
        <input className=" w-3/4 text-xs text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 " id="small_size" type="file"/>

          <button className=" border py-2  px-3 bg-blue-500 text-white rounded-md">
            Upload Image
          </button>
        </div>
        <ReactQuill
          className="my-5 h-72 w-full"
          placeholder="Write post here..."
          formats={formats}
          modules={modules}
          theme="snow"
          value={value}
          onChange={setValue}
        />
        <button className="my-10 border rounded-md p-2 w-full bg-gradient-to-r from-indigo-500 to-pink-500 text-white">Post</button>
      </form>

      {/* <div className='content'  dangerouslySetInnerHTML={{__html:value}}/> */}
    </div>
  );
};

export default CreatePost;
