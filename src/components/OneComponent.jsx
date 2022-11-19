import * as React from "react";

function OneComponent(props) {
  return (
    <div className="vocalOneSpace">
      <button
        className="vocalOneElem"
        onClick={() => {
          props.setPopUp();
        }}
      >
        <img
          src={require(`../assets/images/blog_img/${props.oneImgHide}`)}
          className="blog_img hide"
          alt="blog_image_hide"
        />
        <img
          src={require(`../assets/images/blog_img/${props.oneImgUp}`)}
          className="blog_img up"
          alt="blog_image_up"
        />
      </button>
      <h2>{props.hTxt}</h2>
      <p>{props.pTxt}</p>
    </div>
  );
}

export default OneComponent;
