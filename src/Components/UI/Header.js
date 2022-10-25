import React, { useContext, useState, useEffect } from 'react';
import { Link } from "react-router-dom";

import GeneralHeader from './Headers/GeneralHeader';
import MobileHeader from './Headers/MobileHeader';
import styles from './Header.module.css';
import StyleData from '../../store/StyleContext';

const Header = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 680);

    function handleWindowSizeChange() {
        if(window.innerWidth <= 680){
            setIsMobile(true);
        } else {
            setIsMobile(false);
        }
    }
    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);

    const stylectx = useContext(StyleData);

    const divStyle = {
        "backgroundColor": stylectx.mainColor1,
    };

    const logoTextStyle = {
        "color" : stylectx.logoTextColor
    };

    const logoTextUnderline = {
        "backgroundColor" : stylectx.logoTextColor
    };

    return (
        <React.Fragment>
            <div style={divStyle} className={styles.headerContainer}>
            <Link to="/home">
            <div className={styles.logoDiv}>
                <div className={styles.mikesContainer}>
                    <p style={logoTextStyle} className={styles.mikes}>Mike's</p>
                    <div style={logoTextUnderline} className={styles.underline}></div>
                </div>
                <div className={styles.frameServiceContainer}>
                    <p style={logoTextStyle} className={styles.frameService}>Frame Service</p>
                </div>
            </div>
            </Link>
            <div className={styles.navContainer}>
            {isMobile &&
            <MobileHeader />
            }
            {!isMobile && 
            <GeneralHeader />
            }
            </div>
            </div>
        </React.Fragment>
    );
};

export default Header;