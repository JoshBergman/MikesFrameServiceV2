import React, { useState, useContext } from 'react';
import { Link } from "react-router-dom";
import StyleData from '../../../store/StyleContext';

import styles from './MobileHeader.module.css';

const MobileHeader = () => {
    const stylectx = useContext(StyleData);

    const hamburgerStyle = {
        "background-color" : stylectx.navWordColor
    };

    const navWordStyle = {
        "color" : stylectx.navWordColor
    };

    const hamburgerBunStyle = {
        "background-color" : "transparent"
    };

    const [isShowingMenu, setIsShowingMenu] = useState(false);

    const toggleMenuHandler = () => {
        setIsShowingMenu((prevState) => {return !prevState});
    };

    return (
        <React.Fragment>
        <button className={styles.burgerButton} onClick={toggleMenuHandler}>
            <div style={hamburgerBunStyle} className={styles.hamburgerStyle}>
                <div style={hamburgerStyle} className={styles.hamburgerSlices} />
                <div style={hamburgerStyle} className={styles.hamburgerSlices} />
                <div style={hamburgerStyle} className={styles.hamburgerSlices} />
            </div>
            {isShowingMenu && <p>Is showing menu!</p>}
        </button>
        {/* <Link to="/services" className={styles.navLink} >Services</Link>
        <Link to="/about" className={styles.navLink} >About</Link>
        <Link to="/find-us" className={styles.navLink} >Find Us</Link> */}
        </React.Fragment>
    );
};

export default MobileHeader;

//include:
//tap to call
//logo
//hamburger icon selector