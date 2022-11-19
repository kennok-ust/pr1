import * as React from "react";
import OneComponent from "./OneComponent";
import arr from "../assets/const/vocalArray";

function VocalOne() {
  const [popUp, setPopUp] = React.useState({
    pop1: false,
    pop2: false,
    pop3: false,
    pop4: false,
  });

  return (
    <div className="vocalOneMain">
      {/* <div className="vocalOneName">Про вокал первое</div> */}
      <div className="vocalOne">
        <div className="vocalOneInner">
          {arr.map(
            (item, index) =>
              [0, 1, 2, 3].includes(index) && (
                <OneComponent
                  setPopUp={() => {
                    setPopUp((prev) => ({
                      ...prev,
                      [item.key]: true,
                    }));
                  }}
                  oneImgHide={item.oneImgHide}
                  oneImgUp={item.oneImgUp}
                  hTxt={item.hTxt}
                  pTxt={item.pTxt}
                />
              )
          )}
        </div>
      </div>

      {arr.map(
        (item) =>
          popUp[item.key] && (
            <div className="PopUp">
              <div className="PopUpMain">
                <div className="PopUpImage">
                  <img
                    src={require(`../assets/images/vocal/pop/${item.image}`)}
                    alt=""
                  />
                </div>
                <div className="PopUpText">{item.name}</div>
              </div>
              <div
                className="PopUpBack"
                onClick={() => {
                  setPopUp(() => ({
                    key: false,
                  }));
                }}
              />
            </div>
          )
      )}
    </div>
  );
}

export default VocalOne;
