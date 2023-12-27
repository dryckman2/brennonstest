import React from "react";

export function Error(props) {
    if (props.level === "none") {
        return (<div />);
    }
    let color = "blue"; // If this comes out as blue something if fucked up
    if (props.level === "Error") { //TODO: Replace with a proper enum for error levels
        color = "#d28282";
    }
    if (props.level === "Warning") {
        color = "#d2cb82";
    }
    return (<div className="errorMsg" style={{ backgroundColor: color }}>{props.level}: {props.message}</div>);

}