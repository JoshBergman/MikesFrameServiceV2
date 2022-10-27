import React, { useContext } from 'react';
import { AiFillStar, AiOutlineStar} from 'react-icons/ai';
import StyleData from '../../../store/StyleContext';

import styles from './Reviews.module.css';

const Reviews = (props) => {
    const stylectx = useContext(StyleData);

    const starColor = {
        "color" : stylectx.mainColor1,
        "fontSize" : "16px"
    };
    
    const yelpReviews = [
        {
            author : "Willy G.",
            rating : 5,
            comment : "Mike was excellent to work with. He performed the work quickly and kept it under his quoted price even though it was more than he anticipated. I appreciated the itemized receipt and he was extremely knowledgeable about my vehicle. Highly recommend to anyone in need of auto frame and collision work.",
        },
        {
            author : "Allen H.",
            rating : 5,
            comment : "Mike took care of a challenging frame corrosion issue at a fair price, promptly.  Mike came through when others turned away the work.  Thank you Mike!",
        },
        {
            author : "Brad L.",
            rating : 5,
            comment : "Bought a Jeep Wrangler back in 2003 and had it to a dealership, in Phoenix a few years ago. Long story short they told me I needed over $4000.00 worth of repairs due to an accident , that was never disclosed in the Carfax. Not having a huge trust of dealerships, I got a second opinion from Cedar Ave Repair. They suggested that I bring it to Mikes. Found out my frame was bent, something the dealership totally missed. Long story short, Mike straightened my frame and made a few other needed repairs at a fraction of what the Dealership wanted, and much of what the dealership said needed repair , didn't . Happy to say my Jeep is as good as new, thanks to Mike.",
        }
        
    ];

    const googleReviews = [
        {
            author : "Joseph H.",
            rating : 5,
            comment : "Awesome experience, very knowledgeable and good at communicating to someone who isn't car savvy. Fair prices too.",
        },
        {
            author : "Jim M.",
            rating : 5,
            comment : "Went to Mike the first time on the recommendation of a friend who takes the commercial vehicles for his business there.  Was very pleased and have been back a couple of times since then.",
        },
        {
            author : "Zachary B.",
            rating : 5,
            comment : "Amazing fast and professional service. He understands cars and knows what he can and cannot/will not do, he doesn't just throw parts at problems and charge ridiculous bills.",
        },
        {
            author : "J B.",
            rating : 5,
            comment : "I'm excited to have this guy work on my racecar. Alignment, some fabrication, and welding. Seems very confident. Not many places like this in metro. The guy is really cool too.",
        },
        {
            author : "Will G.",
            rating : 5,
            comment : "Mike was excellent to work with; Knowledgeable, timely, well priced, honest and nice. Highly recommend.",
        }
    ];

    const stars = (rating) => {
        let starsLeft = rating;
        const returnStars = [];
        for(let i = 0; i < 5; i++){
            if(starsLeft >= 1){
                returnStars.push(<AiFillStar style={starColor} key={i}/>);
                starsLeft--;
            } else {
                returnStars.push(<AiOutlineStar style={starColor} key={i}/>);
            }
        }
        return(returnStars);
    };

    return (
        <div className={styles.flexContainer}>
            {props.yelp && yelpReviews.map((review) => {
                return (
                <div className={styles.reviewContainer} key={review.author}>
                    <div className={styles.titleDiv}>
                        <h1 className={styles.reviewAuthor}>{review.author}</h1>
                        <div className={styles.starsDiv}>
                            {stars(review.rating)}
                        </div>
                    </div>
                    <div className={styles.descDiv}>
                        <p className={styles.reviewDesc}>{review.comment}</p>
                    </div>
                </div>
                );
                })}
            {props.google && googleReviews.map((review) => {
                return (
                <div className={styles.reviewContainer} key={review.author}>
                    <div className={styles.titleDiv}>
                        <h1 className={styles.reviewAuthor}>{review.author}</h1>
                        <div className={styles.starsDiv}>
                            {stars(review.rating)}
                        </div>
                    </div>
                    <div className={styles.descDiv}>
                        <p className={styles.reviewDesc}>{review.comment}</p>
                    </div>
                </div>
                );
                })}
        </div>
    );
};

export default Reviews;