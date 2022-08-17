import React from "react";
import css from "./Input.module.css";

interface IInputProps extends React.HTMLProps<HTMLInputElement> {
    inputRef?: React.LegacyRef<HTMLInputElement>;
}

export const Input = (props: IInputProps) => {
    const { type, value, checked, onChange, onClick, onKeyDown, inputRef, placeholder } = props;

    return (
        <input className={css.input}
            placeholder={placeholder}
            type={type}
            value={value}
            checked={checked}
            onChange={onChange}
            onClick={onClick}
            onKeyDown={onKeyDown}
            ref={inputRef}
        />
    );
};