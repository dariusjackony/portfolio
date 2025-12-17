import React from "react";
import { Link, useParams } from "react-router-dom";
import Posts from "../Blog/Posts";
export default function BlogDetails(){
   const {postId} = useParams();
   const post = Posts.find(p => p.id === parseInt(postId));
   if(!post){
    return <span>No Post Found</span>
   }
    return(
      <section>
         <h1>{post.title}</h1>
         <p>{post.content}</p>
      </section>
    )
}