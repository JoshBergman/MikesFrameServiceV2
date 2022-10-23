import React, { useContext, useState, useEffect } from 'react';
import { Link } from "react-router-dom";

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
        "background-color": stylectx.mainColor1,
    };
    return (
        <React.Fragment>
            <div style={divStyle} className={styles.secondStyle}>
            </div>
            {isMobile &&
            <p>true</p>
}
{!isMobile && 
            <p>false</p>
}
                    <Link to="/services" className={styles.navLink} >Services</Link>
                    <Link to="/about" className={styles.navLink} >About</Link>
                    <Link to="/find-us" className={styles.navLink} >Find Us</Link>
        </React.Fragment>
    );
};

export default Header;