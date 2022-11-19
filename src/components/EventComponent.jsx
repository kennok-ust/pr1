import * as React from "react";

function EventComponent(props) {
  return (
    <div className="eventFutureElem">
      <img
        src={require(`../assets/images/event/${props.eventImg}`)}
        className="slider_img"
        alt="EventImg"
      />
      <ul>
        <li>{props.date}</li>
        <li>{props.place}</li>
        <li>
          {props.eventTxt}
          <a href={props.eventLink1} target="_blank" rel="noreferrer">
            {props.eventLink1Txt}
          </a>
          {props.eventTxtAnd}
          <a href={props.eventLink2} target="_blank" rel="noreferrer">
            {props.eventLink2Txt}
          </a>
        </li>
      </ul>
    </div>
  );
}

export default EventComponent;
