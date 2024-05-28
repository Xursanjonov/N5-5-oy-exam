import React, { memo } from 'react'

const Button = ({ id, className, onClick, children, disabled, type = "button", }) => {

    return <button id={id} disabled={disabled} className={className} onClick={onClick} type={type} > {children} </button>
};

export default memo(Button)