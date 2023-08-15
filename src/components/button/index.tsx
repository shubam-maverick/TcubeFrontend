import "bootstrap/dist/css/bootstrap.css";
import React from "react";

export function Button(props: { label: string, onClick?: Function }) {

    let onButtonClick = () => {
        console.log("Button Clicked");
        props.onClick?.()
    }

    return (
        <button className="btn btn-primary btn-lg btn-block" onClick={onButtonClick}>
            {props.label}
        </button>
    );
}
