import React, { useState, useContext } from 'react';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

import styles from './SlideShow.module.css';
import StyleData from '../../store/StyleContext';

import pic1 from '../../images/pic1.jpg';
import pic2 from '../../images/pic2.jpg';
import pic3 from '../../images/pic3.jpg';
import pic4 from '../../images/pic4.jpg';
import pic5 from '../../images/pic5.jpg';
import pic6 from '../../images/pic6.jpg';
import pic7 from '../../images/pic7.jpg';
import pic8 from '../../images/pic8.jpg';
import pic9 from '../../images/pic9.jpg';
import pic10 from '../../images/pic10.jpg';
import pic11 from '../../images/pic11.jpg';

const SlideShow = () => {
    const [currImg, setCurrImg] = useState(0);
    const stylectx = useContext(StyleData);

    const arrowStyle = {
      color : stylectx.mainColor1
    };

    const incrementImg = () => {
      if(currImg === (images.length - 1)){
        setCurrImg(0);
      } else {
        setCurrImg((prevImg) => {return prevImg + 1;});
      }
    };

    const decrementImg = () => {
      if(currImg === 0){
        setCurrImg(images.length-1);
      } else {
        setCurrImg((prevImg) => {return prevImg - 1;});
      }
    };

const images = [
    pic1,
    pic2,
    pic3,
    pic4,
    pic5,
    pic6,
    pic7,
    pic8,
    pic9,
    pic10,
    pic11,
  ];

const imgElements = {};

  for (let i = 0; i < images.length; i++){
    imgElements[i] = <img src={images[i]} className={styles.pic} alt="Decorative Car" />;
  }
      
          return (
            <React.Fragment>
              <div className={styles.slideShowContainer}>
                <div className={styles.arrowContainer}>
                  <button onClick={decrementImg} className={styles.button} >
                    <BsChevronLeft className={styles.arrowLeft} style={arrowStyle} />
                  </button>
                </div>
                <div className={styles.imgContainer} >
                  {imgElements[currImg]}
                </div>
                <div className={styles.arrowContainer} >
                  <button onClick={incrementImg} className={styles.button} >
                    <BsChevronRight className={styles.arrowRight} style={arrowStyle} />
                  </button>
                </div>
              </div>
            </React.Fragment>
          );
      };

export default SlideShow;