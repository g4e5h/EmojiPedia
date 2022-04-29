import React from "react";
import "./card.css"

function Card(props){
    return(
        <div className="maincard">
          <span className="emoji ">{props.emoji}</span>
          <div className="Title"> {props.title}</div>
        <div className="meaning"> {props.meaning}</div>
        </div>
    );
}

export default Card;