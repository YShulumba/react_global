import React from 'react';
import styles from './Textfield.css';

const Textfield = (props) => (
    <div>
        <label htmlFor={`${props.id}Field`} className={styles.textfieldLabel}>{props.label}</label>
        <input 
            className={styles.textfield} 
            id={`${props.id}Field`} 
            type={props.type}
            onChange={props.change} 
            onKeyPress={props.keypress}
            placeholder={props.placeholder} />
    </div>
)

export default Textfield;