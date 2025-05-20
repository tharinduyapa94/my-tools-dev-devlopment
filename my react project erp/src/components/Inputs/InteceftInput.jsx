import React from "react";
import PropTypes from 'prop-types';
import './InteceftInput.css'


const InteceftInput = ({ ...props }) => {
    return (
        <div className="input_wrapp">
            
            <input
                type={props.type}
                placeholder={props.placeholder}
                value={props.value}
                onChange={props.onChange}
                name={props.name}
            />
        </div>

    )
}

InteceftInput.PropTypes = {
    type: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    onChange: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
}

InteceftInput.defaultProps = {
    type: "text",
    placeholder: "",
    value: "",
};

export default InteceftInput; 