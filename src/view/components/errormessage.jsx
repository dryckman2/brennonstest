import React from "react";

export function Error(props) {
    console.log(props.level)
    if (props.level === "none") {
        return (<div />);
    }
    return (<div className="errorMsg">{props.level}: {props.message}</div>);

}