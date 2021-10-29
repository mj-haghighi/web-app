import React, { useState } from 'react'
import './style.css'

const Button = (props) => {
    const { children, onClick, className, style } = props
    const [styles, setStyle] = useState('')

    const onMouseEnter = () => {
        setStyle('shadow')
    }

    const onMouseLeave = () => {
        setStyle('')
    }

    const onMouseDown = () => {
        setStyle('')
    }

    const onMouseUp = () => {
        setStyle('shadow')
    }

    return (
        <button
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onMouseDown={onMouseDown}
            onMouseUp={onMouseUp}
            style={style}
            className={`ease button marg-1 padd-1 round-1 txt-col-pri bold ${styles} ${className}`} onClick={onClick}>
            {children}
        </button>
    )
}

export default Button
