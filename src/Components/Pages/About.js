import React, { useContext } from 'react';

import PageTemplate from "../UI/PageTemplate";
import Heading from "../UI/Heading";
import SeperationBar from "../UI/SeperationBar";
import Reviews from "../UI/PageResources/Reviews";
import styles from './Page.module.css';
import StyleData from '../../store/StyleContext';
import TextBlock from '../UI/PageResources/TextBlock';

const About = () => {
    const stylectx = useContext(StyleData);

    const buttonColors = {
        "backgroundColor" : stylectx.mainColor1,
        "color" : stylectx.logoTextColor
    };
    return(
        <PageTemplate>
            <Heading boxTop="20px" >
                Our Company
            </Heading>
            <SeperationBar />
                <TextBlock>
                    Looking for a frame shop you can trust? Look no further! Mike's Frame Service is the most friendly, honest, fair, professional  automotive frame repair shop in the area. Mikes Frame Service has been in business in South Minneapolis since 1979.
                </TextBlock>
            <Heading boxTop="40px" subText="Our Mission" />
            <SeperationBar />
                <TextBlock>
                    We want to be the automotive frame and alignment repair facility you turn to for all your automotive frame alignment and wheel alignment needs.
                    For the many years we've been in business, we have been striving to provide our clients the best quality service possible to gain their full satisfaction.
                </TextBlock>
                <TextBlock>
                    They've shown their appreciation by coming back to us repeatedly.
                    We want nothing more than to keep you and your vehicle safe and on the road. 
                    Whether you own an import, a domestic, a high performance exotic car, a pickup truck, or a classic cruiser we're the place to take your vehicle for all of its alignment needs.
                </TextBlock>
            <Heading boxTop="40px" subText="Long-Term Business Focused" />
            <SeperationBar />
                <TextBlock>
                    We're committed to providing you with the highest level of service, so you'll always choose us for your frame and alignment needs. 
                    For most people; automotive collision repair is not fun or convenient. So, we want make the process as easy and enjoyable as possible for you. We genuinely care about your car and your experience, and it shows. 
                </TextBlock>
                <TextBlock>
                    Our first-time customers continually become our long term customers time and time again, choosing us for all their auto motive frame and alignment needs.
                    We're committed to auto repair and to serving you with quality and value. Bring your car in today for an inspection, and see what our commitment to quality is all about! We may not be related, but you'll feel like we're family!
                </TextBlock>
            <Heading boxTop="80px" >
                Reviews
            </Heading>
            <SeperationBar />
            <Heading boxTop="60px" subText="Yelp"  />
            <SeperationBar />
            <Reviews yelp={true} />
            <div className={styles.buttonContainer}>
            <a href="https://www.yelp.com/biz/mikes-frame-service-minneapolis"
             className={styles.link}
             target="_blank"
             >
                <button style={buttonColors} className={styles.button}>
                See More Yelp Reviews
                </button>
            </a>
        </div>
            <Heading boxTop="80px" subText="Google" />
            <SeperationBar />
            <Reviews google={true} />
            <div className={styles.buttonContainer}>
            <a href="https://www.google.com/search?sxsrf=ALiCzsZ-MBAhJqgSqCmTv2Igr7170TtfMA:1666817708663&q=mike%27s+frame+service&spell=1&sa=X&ved=2ahUKEwjh9Lfr4_76AhXQrokEHUO3AV8QBSgAegQIMxAB&cshid=1666817718696665&biw=1169&bih=955&dpr=1#lrd=0x87f62848e291dee9:0xf1372f8a788de1cf,1,,,"
             className={styles.link}
             target="_blank"
             >
                <button style={buttonColors} className={styles.button}>
                    See More Google Reviews
                </button>
            </a>
        </div>
        </PageTemplate>
    );
};

export default About;