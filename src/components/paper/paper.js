import React from 'react'

const Paper = (props) => {
    const {
        children,
        className,
        style
    } = props

    return (
        <div style={style} className={`shadow pri-back-col round-1 ${className}`}>
            {children}
        </div>
    )
}

export default Paper;