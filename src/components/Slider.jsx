import * as React from 'react';


function Slider (){

    

    const left = React.useRef();
    const right = React.useRef();
    const slider = React.useRef();
    const images = React.useRef();

    // const [state, setState] = React.useState(false);

    

    React.useEffect(() => {
        console.log(images.current);
        console.log(left.current);

        let counter = 0;
        let stepSize = images.current.clientWidth;

        function resizeSlider (){
            stepSize = images.current.clientWidth;
        }

        window.addEventListener('resize', resizeSlider);
    
        function rightClick (){
            if(counter >= 2) counter = -1;
            slider.current.classList.add('animation');
            counter++;
            slider.current.style.transform = `translateX( ${-stepSize * counter}px)`;
        }

        right.current.addEventListener('click', rightClick);

        function leftClick (){
            if(counter <= 0) counter = 3;
            slider.current.classList.add('animation');
            counter--;
            slider.current.style.transform = `translateX( ${-stepSize * counter}px)`;
        }
    
        left.current.addEventListener('click', leftClick);   

        return () => {
            window.removeEventListener('resize',resizeSlider);
            window.removeEventListener('click',rightClick);
            window.removeEventListener('click',leftClick);
        }
    },[])

    return(
        <div className="slider">
            <div className="slider_container">
                <div className="slider_slide" ref={slider}>
                    <img src={require('../assets/images/slide_img/1.jpg')} className="slider_img" alt="image1" ref={images}/>
                    <img src={require('../assets/images/slide_img/2.jpg')} className="slider_img" alt="image2"/>
                    <img src={require('../assets/images/slide_img/3.jpg')} className="slider_img" alt="image3"/>
                </div>
            </div>
            <div className="btnWrap">
                {/* {state && <button className="btn btn_left" ref={left}><i className="fa-solid fa-chevron-left"></i></button>} */}
                {/* <button className="btn btn_right" ref={right}><i className="fa-solid fa-chevron-right" onClick={() => {setState(true)}}></i></button> */}
                <button className="btn btn_left" ref={left}><i className="fa-solid fa-chevron-left"></i></button>
                <button className="btn btn_right" ref={right}><i className="fa-solid fa-chevron-right"></i></button>
            </div>
        </div>
    );
}

export default Slider;