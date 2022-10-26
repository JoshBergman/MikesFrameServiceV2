import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import StyleData from '../../../store/StyleContext';
import styles from './DirectButton.module.css';

const DirectButton = (props) => {
    const stylectx = useContext(StyleData);

    const buttonColors = {
        "backgroundColor" : stylectx.mainColor1,
        "color" : stylectx.logoTextColor
    };

    return (
        <div className={styles.buttonContainer}>
            <Link to={props.to} className={styles.link} >
                <button style={buttonColors} className={styles.button}>
                    {props.children}
                </button>
            </Link>
        </div>
    );
};

export default DirectButton;