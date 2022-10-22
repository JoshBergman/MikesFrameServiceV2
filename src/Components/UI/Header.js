import React, { useContext } from 'react';
import { Link } from "react-router-dom";

import styles from './Header.module.css';
import StyleData from '../../store/StyleContext';

const Header = () => {
    const stylectx = useContext(StyleData);

    const divStyle = {
        "background-color": stylectx.mainColor1,
        "width": "100px",
        "height":"100px"
    };
    return (
        <React.Fragment>
            <div style={divStyle}>

            </div>
                    <Link to="/services" className={styles.navLink} >Services</Link>
                    <Link to="/about" className={styles.navLink} >About</Link>
                    <Link to="/find-us" className={styles.navLink} >Find Us</Link>
        </React.Fragment>
    );
};

export default Header;