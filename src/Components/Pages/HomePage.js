import React, { useContext } from 'react';
import { FaCarCrash, FaHandshake } from 'react-icons/fa';
import { GiCarWheel } from 'react-icons/gi';

import styles from './Page.module.css';
import PageTemplate from '../UI/PageTemplate';
import SlideShow from '../UI/SlideShow';
import Heading from '../UI/Heading';
import SeperationBar from '../UI/SeperationBar';
import Offering from '../UI/Offering';
import StyleData from '../../store/StyleContext';
import Reviews from '../UI/PageResources/Reviews';
import DirectButton from '../UI/PageResources/DirectButton';
import MicroFindUs from '../UI/PageResources/MicroFindUs';

const HomePage = () => {
    const stylectx = useContext(StyleData);

    const listItemStyle = {
        color: stylectx.mutedMainColor1
    };

    const iconStyle = {
        "color" : stylectx.mutedMainColor1
    };

    return (
        <PageTemplate>
            <Heading
            subText="Since 1979"
            subtextAlign="center"
            >
                Frame Repair
            </Heading>
            <div className={styles.slideShowContainer}>
                <SlideShow />
            </div>
            <Heading boxTop="50px" >
                What We Offer
            </Heading>
            <SeperationBar />
            <div className={styles.flexContainer} >
                <Offering to="/services" title="Frame" buttonTitle="Services" icon={<FaCarCrash style={iconStyle}/>} >
                    <li style={listItemStyle} className={styles.listItem}>Option item a</li>
                    <li style={listItemStyle} className={styles.listItem}>Option item b</li>
                </Offering>
                <Offering to="/services" title="Wheel & Tire" buttonTitle="Services" icon={<GiCarWheel style={iconStyle}/>} >
                    <li style={listItemStyle} className={styles.listItem}>Option item a</li>
                    <li style={listItemStyle} className={styles.listItem}>Option item b</li>
                </Offering>
                <Offering to="/about" title="Quality Service" buttonTitle="About" icon={<FaHandshake style={iconStyle}/>} >
                    <li style={listItemStyle} className={styles.listItem}>Option item a</li>
                    <li style={listItemStyle} className={styles.listItem}>Option item b</li>
                </Offering>
            </div>
            <Heading boxTop="80px" fontSize="25px" >
                What People Say About Us
            </Heading>
            <SeperationBar />
            <Reviews yelp={true} />
            <DirectButton to="/about">
                See More Reviews
            </DirectButton>
            <Heading boxTop="90px" >
                Contact Us
            </Heading>
            <SeperationBar />
            <MicroFindUs />
            <DirectButton to="/find-us">
                Find Us
            </DirectButton>
        </PageTemplate>
    );
};

export default HomePage;