import React from 'react';

const Radiobutton = (props) => (
    <div className="radio">
        <label>
            <input 
                checked={props.checked} 
                type="radio" 
                onChange={props.changed} 
                name={props.name} 
                className={`${props.className}__radio`} />
            <span className={`${props.className}__radio-fake`}></span>
            <span className={`${props.className}__label-fake`}>{props.children}</span>
        </label>
    </div>
)

export default Radiobutton;