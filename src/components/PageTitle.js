// create a react component
//
import React from "react";
import "../styles/PageTitle.css";


export default function PageTitle(props) {
  return (
    <div className="page-title">
        <h1>{props.title}</h1>
        <h5>{props.subtext}</h5>
    </div>
  );
}