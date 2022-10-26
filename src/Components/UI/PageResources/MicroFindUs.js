import React, { useContext } from 'react';
import { BsPinMapFill, BsFillTelephoneFill } from 'react-icons/bs';

import StyleData from '../../../store/StyleContext';
import styles from './MicroFindUs.module.css';

const MicroFindUs = () => {
    const stylectx = useContext(StyleData);

    const color = {
        "color" : stylectx.mutedMainColor1
    };

    return (
        <div className={styles.container}>
            <div className={styles.itemContainer}>
                <h2 className={styles.text}><BsPinMapFill style={color} className={styles.icon} />3858 DIGHT AVENUE S. MINNEAPOLIS MN 55406</h2>
            </div>
            <div className={styles.itemContainer}>
                <h2 className={styles.text}><BsFillTelephoneFill style={color} className={styles.icon} />612 - 724 - 3240</h2>
            </div>
        </div>
    );
};

export default MicroFindUs;