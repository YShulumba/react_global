import React from 'react';
import styles from './Logo.css';

const Logo = (props) => (
    <strong className={styles.logo}>
        <a href={props.url || '#'}>{props.children}</a>
    </strong>
)

export default Logo;