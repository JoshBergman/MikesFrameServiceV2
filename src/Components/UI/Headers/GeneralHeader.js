import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import StyleData from '../../../store/StyleContext';

import styles from './GeneralHeader.module.css'

const GeneralHeader = () => {
    const stylectx = useContext(StyleData);

    const navStyle = {
        "color" : stylectx.navWordColor
    }

    return (
        <React.Fragment>
        <Link to="/find-us" className={styles.navLink} ><p style={navStyle} className={styles.navWords}>Find Us</p></Link>
        <Link to="/about" className={styles.navLink} ><p style={navStyle} className={styles.navWords}>About</p></Link>
        <Link to="/services" className={styles.navLink} ><p style={navStyle} className={styles.navWords}>Services</p></Link>
        </React.Fragment>
    );
};

export default GeneralHeader;