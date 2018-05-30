import React from 'react';
import styles from './Button.css';

const Button = (props) => (
    <button onClick={props.action} type={props.type} className={`${props.className} ${styles.btn}`}>{props.children}</button>
)

export default Button;