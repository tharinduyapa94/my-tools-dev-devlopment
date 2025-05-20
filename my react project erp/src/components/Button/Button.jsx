import React from "react";
import './btn.css'

const IButton = ({  label, onClick }) => {

    return (
        <button
            className='button'
            onClick={onClick}
        >
            {label}
        </button>
    )
}

export default IButton;