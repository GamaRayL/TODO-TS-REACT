import React, { DOMAttributes } from "react";
import "./Button.css";

interface IButtonProps extends DOMAttributes<HTMLButtonElement> {
    type: "submit" | "button" | "reset";
    buttonStyle?: string;
    buttonSize?: string;
}

const STYLES = [
    "btn--primary--container",
    "btn--primary--outlined",
    "btn--primary--text",
];

const SIZES = [
    "btn--small",
    "btn--medium",
    "btn--large",
];

export const Button = (props: IButtonProps) => {
    const { onClick, onSubmit, children, type, buttonStyle, buttonSize } = props;

    const checkButtonStyle =
        STYLES.includes(buttonStyle as string)
            ? buttonStyle
            : STYLES[0];

    const checkButtonSize =
        SIZES.includes(buttonSize as string)
            ? buttonSize
            : SIZES[0];

    return (
        <button
            className={`btn ${checkButtonStyle} ${checkButtonSize}`}
            onClick={onClick}
            onSubmit={onSubmit}
            type={type}
        >
            {children}
        </button>
    );
};