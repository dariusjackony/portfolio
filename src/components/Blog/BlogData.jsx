import React from "react";
import "./BlogData.css";
import Posts from "../Blog/Posts";
import { Link } from "react-router-dom";
export default function BlogData(){
    return(
        <section className="blogs">
            <span className="head">Blogs</span>
            <p className="sub-head">A collection of thoughts, ideas, and reflections.</p>
            <div className="blog-content">
               {Posts.map(post => (
              <div className="card" key={post.id}>
                 <span className="card-title">{post.title}</span>
                 <p className="card-subtitle">{post.subtitle}</p>
                 <Link to={`/BlogData/${post.id}`}>
                   <button className="read-btn">Read More</button>
                 </Link>
             </div>
             ))}             
            </div>
           
        </section>
    )
}