import BlogComponent from "./BlogComponent";

function MainBlog() {
  return (
    <main>
      <div className="blog_name">Название первого раздела</div>
      <div className="blog">
        <div className="blog_inner">
          <BlogComponent
            blogLink="/About"
            blogImgHide="1_1_hide.jpg"
            blogImgUp="1_1_up.jpg"
            hTxt="Masha"
            pTxt="text texttext texttexttexttext text texttext texttexttextPPP"
            linkTxt=""
          />
          <BlogComponent
            blogLink="/Vocal"
            blogImgHide="1_2_hide.jpg"
            blogImgUp="1_2_up.jpg"
            hTxt="Vocal"
            pTxt="text texttext texttexttexttext text texttext texttexttextPPP"
            linkTxt=""
          />
          <BlogComponent
            blogLink="/Teory"
            blogImgHide="1_3_hide.jpg"
            blogImgUp="1_3_up.jpg"
            hTxt="Teory"
            pTxt="text texttext texttexttexttext text texttext texttexttextPPP"
            linkTxt=""
          />
          <BlogComponent
            blogLink="/Event"
            blogImgHide="1_4_hide.jpg"
            blogImgUp="1_4_up.jpg"
            hTxt="Event"
            pTxt="text texttext texttexttexttext text texttext texttexttextPPP"
            linkTxt=""
          />
        </div>
      </div>
    </main>
  );
}

export default MainBlog;

//в компоненты
