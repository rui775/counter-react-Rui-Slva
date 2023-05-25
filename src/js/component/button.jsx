import React from "react";

const Button = (props) => {
    let {title, click} = props;
    return (
        <button onClick={click}>{title}</button>
    )
}

export default Button;