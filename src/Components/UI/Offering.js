import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import StyleData from '../../store/StyleContext';
import styles from './Offering.module.css';

const Offering = (props) => {
    const stylectx = useContext(StyleData);

    const buttonColor = {
        "backgroundColor" : stylectx.mainColor1,
        "color" : stylectx.logoTextColor,
    };

    return (
        <div className={styles.container}>
            <div className={styles.iconDiv}>
                {props.icon}
            </div>
            <div className={styles.titleDiv}>
                <h1 className={styles.title}>{props.title}</h1>
            </div>
            <div className={styles.descDiv}>
                <ul className={styles.list}>
                    {props.children}
                </ul>
            </div>
            <div className={styles.buttonDiv}>
                <Link 
                className={styles.link}
                to={props.to}
                >
                    <button style={buttonColor} className={styles.button}>See {props.buttonTitle}</button>
                </Link>
            </div>
        </div>
    );
};

export default Offering;