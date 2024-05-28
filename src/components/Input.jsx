import React, { memo } from 'react'

const Input = ({ className, label, labelClass, onChange, value, id, placeholder, type, btnClass, btnIcon }) => {

    return (
        <div className={className}>
            {label ? <label htmlFor={id} className={labelClass}>{label}</label> : <></>}
            <input required type={type} id={id} placeholder={placeholder} value={value} onChange={onChange} />
            {btnIcon ? <button className={btnClass}> {btnIcon} </button> : <></>}
        </div>
    );
}

export default memo(Input)