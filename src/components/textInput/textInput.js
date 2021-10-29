import React, { Fragment, useState } from "react";
import "./style.css";

const TextInput = (props) => {

    const { label, seclabel, value, onChange, placeholder, errorText } = props;

    const blurStyles = 'dark-border';
    const focusStyles = `focus-border`;
    const errorStyles = `error-border`;
    const [styles, setStyles] = useState(blurStyles);

    const onFocus = () => {
        setStyles(focusStyles);
    }

    const onBlur = () => {
        setStyles(blurStyles);
    }

    const onError = () => {
        setStyles(errorStyles);
    };

    if (styles !== errorStyles && errorText !== undefined) {
        onError();
    } else {
        if (styles === errorStyles && errorText === undefined) {
            onBlur()
        }
    }

    return (
        <div
            onMouseEnter={onFocus}
            onMouseLeave={onBlur}
            className={`flex fd-row ai-center sec-back-col padd-1 marg-1 round-1 ease ${styles}`} >
            {label && (
                <div className={'txtcol-pri txt-sm paddh-1'} >{label}</div>
            )}
            <input
                className={`flex-1 text-input sec-back-col txtcol-pri bold`}
                type="text"
                value={value}
                placeholder={placeholder}
                onChange={onChange}
                onFocus={onFocus}
                onBlur={onBlur}
            />
            {seclabel && (
                <div className={'txtcol-pri txt-sm paddh-1 bold'} >{seclabel}</div>
            )}
        </div>
    )
}
export default TextInput;
