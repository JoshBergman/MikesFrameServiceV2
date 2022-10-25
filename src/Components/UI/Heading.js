import React, { useContext } from 'react';

import styles from './Heading.module.css';
import StyleData from "../../store/StyleContext";

const Heading = (props) => {
    const stylectx = useContext(StyleData);

    const textStyle = {
        "color" : stylectx.mainColor1,
        "fontStyle" : props.fontStyle,
        "fontSize" : props.fontSize,
        "marginTop" : props.marginTop,
        "marginBottom" : props.marginBottom,
        "fontWeight" : props.fontWeight
    };

    const subTextStyle = {
        "color" : stylectx.mutedMainColor1,
        "fontStyle" : props.subfontStyle,
        "fontSize" : props.subfontSize,
        "marginTop" : props.submarginTop,
        "marginBottom" : props.submarginBottom,
        "fontWeight" : props.subfontWeight,
        "textAlign" : props.subtextAlign,
    };

    return (
        <div className={styles.headingContainer}>
            <h1
            style={textStyle} 
            className={styles.mainText}
            >
                {props.children}
            </h1>
            <h2
            style={subTextStyle}
            className={styles.subText}
            >
                {props.subText}
            </h2>
        </div>
    );
};

export default Heading;