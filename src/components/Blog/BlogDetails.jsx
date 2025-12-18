import React from "react";
import "./BlogDetails.css";
import { Link, useParams } from "react-router-dom";
import Posts from "../Blog/Posts";
export default function BlogDetails(){
   const {postId} = useParams();
   const post = Posts.find(p => p.id === parseInt(postId));
   if(!post){
    return <span>No Post Found</span>
   }
    return(
      <section className="blog-details-container">
         <div className="blog-details">
             <span className="post-title">
               {post.title}
               </span>
             <p className="post-content">
               {post.content}
             </p>  
         </div>
         <Link to="/BlogData">
           <button className="back-btn">Back to Blogs</button>
         </Link>
      </section>
    )
}