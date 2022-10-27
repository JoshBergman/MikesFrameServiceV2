import React, { useContext } from 'react';
import { BsPinMapFill, BsFillTelephoneFill } from 'react-icons/bs';

import StyleData from '../../../store/StyleContext';
import styles from './MicroFindUs.module.css';

const MicroFindUs = () => {
    const stylectx = useContext(StyleData);

    const color = {
        "color" : stylectx.mutedMainColor1
    };

    const linkyColor = {
        "color" : stylectx.mutedMainColor1
    }

    return (
        <div className={styles.container}>
            <div className={styles.itemContainer}>
                <h2 className={styles.text}><a className={styles.anchor} rel="noreferrer" target="_blank" href="https://www.google.com/maps/place/Mike's+Frame+Services/@44.9322675,-93.2281039,16.75z/data=!4m5!3m4!1s0x87f62848e291dee9:0xf1372f8a788de1cf!8m2!3d44.9323121!4d-93.2257447"><BsPinMapFill style={color} className={styles.icon} /><p className={styles.linky} style={linkyColor}>3858</p> DIGHT AVENUE S. MINNEAPOLIS MN 55406</a></h2>
            </div>
            <div className={styles.itemContainer}>
                <h2 className={styles.text}><a className={styles.anchor} rel="noreferrer" href="tel:+16127243240"><BsFillTelephoneFill style={color} className={styles.icon} />(<p className={styles.linky} style={linkyColor}>612</p>) - 724 - 3240</a></h2>
            </div>
        </div>
    );
};

export default MicroFindUs;