import React, { useContext } from 'react';

import PageTemplate from "../UI/PageTemplate";
import Heading from "../UI/Heading";
import SeperationBar from "../UI/SeperationBar";
import MicroFindUs from "../UI/PageResources/MicroFindUs";
import styles from './Page.module.css';
import pic from '../../store/locationPic.png';
import StyleData from "../../store/StyleContext";

const FindUs = () => {
    const stylectx = useContext(StyleData);

    const textColor = {
        "color" : stylectx.mutedMainColor1
    };

    return(
    <PageTemplate>
        <Heading boxTop="20px">Contact Us</Heading>
        <SeperationBar />
        <Heading subText="Clickable!" subfontSize="15px" submarginBottom="0" marginBottom="0" boxBottom="-15px" />
        <MicroFindUs />
        <Heading boxTop="80px">Hours</Heading>
        <SeperationBar />
        <div className={styles.superDiv}>
            <div className={styles.acenteredDiv}>
                    <div className={styles.dayDiv} style={textColor}>Monday-Thursday</div>
                    <div className={styles.hoursDiv}>7:30AM - 3:00PM</div>
            </div>
            <div className={styles.acenteredDiv}>
                    <div className={styles.dayDiv} style={textColor}>Friday</div>
                    <div className={styles.hoursDiv}>7:30AM - 2:00PM</div>
            </div>
            <div className={styles.acenteredDiv}>
                    <div className={styles.dayDiv} style={textColor}>Saturday-Sunday</div>
                    <div className={styles.hoursDiv}>Closed</div>
            </div>
        </div>
        <Heading boxTop="120px">Map</Heading>
        <SeperationBar />
        <div className={styles.centeredDiv}>
            <a target="_blank" href="https://www.google.com/maps/place/Mike's+Frame+Services/@44.9322675,-93.2281039,16.75z/data=!4m5!3m4!1s0x87f62848e291dee9:0xf1372f8a788de1cf!8m2!3d44.9323121!4d-93.2257447">
                <img className={styles.img} src={pic} />
            </a>
        </div>
    </PageTemplate>
    );
};

export default FindUs;