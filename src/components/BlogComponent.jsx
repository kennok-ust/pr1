import * as React from "react";
import { Link } from "react-router-dom";
import linkUp from "../assets/script/linkUp";

function BlogComponent(props) {
  return (
    <div className="blog_space">
      <div className="blog_elem">
        <Link to={props.blogLink} onClick={linkUp}>
          <img
            src={require(`../assets/images/blog_img/${props.blogImgHide}`)}
            className="blog_img hide"
            alt="blog_image"
          />
          <img
            src={require(`../assets/images/blog_img/${props.blogImgUp}`)}
            className="blog_img up"
            alt="blog_image"
          />
        </Link>
      </div>
      <h2>{props.hTxt}</h2>
      <p>{props.pTxt}</p>
      <Link to={props.blogLink}>{props.linkTxt}</Link>
    </div>
  );
}

export default BlogComponent;
