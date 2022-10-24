import React, { useContext } from 'react';
import ReactDOM  from 'react-dom';
import { Link } from 'react-router-dom';
import StyleData from '../../../store/StyleContext';

import styles from './MenuModal.module.css';

const MenuModal = (props) => {

    const stylectx = useContext(StyleData);


    const navContainerStyle = {
        "background-color" : stylectx.mutedMainColor1,
        "border-left" : ("2px solid " + stylectx.logoTextColor)
    };

    const navDivstyle = {
        
    };

    const navWordStyle = {
        "color" : stylectx.navWordColor
    };



    return ReactDOM.createPortal(
        <React.Fragment>
            
        <div onClick={props.menuToggler} className={styles.modal}>
            <div style={navContainerStyle} className={styles.navContainer}>
                <div style={navDivstyle} className={styles.linkContainer}>
                    <Link style={navWordStyle} className={styles.navWord} to="/services">Services</Link>
                </div>
                <div style={navDivstyle} className={styles.linkContainer}>
                    <Link style={navWordStyle} className={styles.navWord} to="/find-us">Find Us</Link>
                </div>
                <div style={navDivstyle} className={styles.linkContainer}>
                    <Link style={navWordStyle} className={styles.navWord} to="/about">About</Link>
                </div>
                <div style={navDivstyle} className={styles.linkContainer}>
                    <Link style={navWordStyle} className={styles.navWord} to="/home">Home</Link>
                </div>
            </div>
        </div>
        </React.Fragment>
    , document.getElementById('portal-root'));
};

export default MenuModal;