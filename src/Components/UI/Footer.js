import { Link } from 'react-router-dom';

import styles from './Footer.module.css';

const Footer = () => {
    return (
        <div className={styles.footerContainer}>
            <div className={styles.footerSubject}>
                <p className={styles.header}>Navigation</p>
                <p className={styles.item}>
                    <Link to="/services" className={styles.anchor}>Services</Link>
                </p>
                <p className={styles.item}>
                    <Link to="/about" className={styles.anchor}>About</Link>
                </p>
                <p className={styles.item}>
                    <Link to="/find-us" className={styles.anchor}>Find Us</Link>
                </p>
            </div>
            <div className={styles.footerSubject}>
            </div>
            <div className={styles.footerSubject}>
            <p className={styles.header}>Contact</p>
                <p className={styles.item}>
                    <Link to="/find-us" className={styles.anchor}>Call</Link>
                </p>
                <p className={styles.item}>
                    <a href="https://www.google.com/maps/place/Mike's+Frame+Services/@44.9322675,-93.2281039,16.75z/data=!4m5!3m4!1s0x87f62848e291dee9:0xf1372f8a788de1cf!8m2!3d44.9323121!4d-93.2257447" target="_blank" rel="noreferrer" className={styles.anchor}>Location</a>
                </p>
                <p className={styles.item}>
                    <Link to="/find-us" className={styles.anchor}>Hours</Link>
                </p>
            </div>
        </div>
    );
};

export default Footer;