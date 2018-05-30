import React from 'react';
import Logo from '../common/Logo/Logo';
import styles from './Footer.css';

const Footer = (props) => (
    <footer className={styles.footer}>
        <div className={styles.container}>
            <div className={styles.row}>
                <Logo url="/">Netflixroulette</Logo>
            </div>
        </div>
    </footer>
)

export default Footer;