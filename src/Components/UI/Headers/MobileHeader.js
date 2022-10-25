import React, { useState, useContext } from 'react';
import { Link } from "react-router-dom";

import StyleData from '../../../store/StyleContext';
import MenuModal from './MenuModal';
import styles from './MobileHeader.module.css';

const MobileHeader = () => {
    const stylectx = useContext(StyleData);

    const hamburgerStyle = {
        "backgroundColor" : stylectx.navWordColor
    };

    const hamburgerBunStyle = {
        "backgroundColor" : "transparent"
    };

    const [isShowingMenu, setIsShowingMenu] = useState(false);

    const toggleMenuHandler = () => {
        setIsShowingMenu((prevState) => {return !prevState});
    };

    return (
        <React.Fragment>
        <button style={isShowingMenu ? {transform: "rotate(90deg)"} : {transform: "rotate(0deg)"}} className={styles.burgerButton} onClick={toggleMenuHandler}>
            <div style={hamburgerBunStyle} className={styles.hamburgerStyle}>
                <div style={hamburgerStyle} className={styles.hamburgerSlices} />
                <div style={hamburgerStyle} className={styles.hamburgerSlices} />
                <div style={hamburgerStyle} className={styles.hamburgerSlices} />
            </div>
        </button>
        {isShowingMenu && 
            <MenuModal menuToggler={toggleMenuHandler} />
        }

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