"use client";

import { useParams } from "next/navigation";
import { data } from "@/utils/client/fetch";
import React from "react";
import SinglePost from "@/components/Post/SinglePost";



const page = () => {
  const { postid } = useParams();
 
  const post = data.find((post) => post.id === Number(postid));

  console.log(post);

  return (
     <SinglePost post={post}/>
  );
};

export default page;
