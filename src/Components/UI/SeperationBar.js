import React, { useContext } from 'react';

import StyleData from '../../store/StyleContext';
import styles from './SeperationBar.module.css';

const SeperationBar = () => {
    const stylectx = useContext(StyleData);

    const barStyle = {
        "backgroundColor" : stylectx.mutedMainColor1,
    };
    
    return (
        <div style={barStyle} className={styles.bar} ></div>
    );
};

export default SeperationBar;