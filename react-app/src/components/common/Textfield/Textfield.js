import React from 'react';
import Aux from '../../../hoc/Aux';
import styles from './Textfield.css';

const Textfield = (props) => (
    <Aux>
        <label htmlFor={`${props.id}Field`} className={styles.textfieldLabel}>{props.label}</label>
        <input 
            className={styles.textfield} 
            id={`${props.id}Field`} 
            type={props.type}
            onChange={props.change} 
            onKeyPress={props.keypress}
            placeholder={props.placeholder} />
    </Aux>
)

export default Textfield;