import React, { useState } from 'react';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

import styles from './SlideShow.module.css';

const SlideShow = () => {
    const [currImg, setCurrImg] = useState(0);

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
    "http://nebula.wsimg.com/016d5488cc81cb66c1bb0525400d8ee2?AccessKeyId=0F89FA1A33796F6C2EC6&disposition=0&alloworigin=1",
    "http://nebula.wsimg.com/ce0fb999ecb0adf454435e30b2b2ebf6?AccessKeyId=0F89FA1A33796F6C2EC6&disposition=0&alloworigin=1",
    "http://nebula.wsimg.com/fb4912845fbc8be71a85c17f30c0e08d?AccessKeyId=0F89FA1A33796F6C2EC6&disposition=0&alloworigin=1",
  ];

const imgElements = {};

  for (let i = 0; i < images.length; i++){
    imgElements[i] = <img src={images[i]} className={styles.pic} />;
  }
      
          return (
            <React.Fragment>
              <div className={styles.container}>
                  <div className={styles.arrowContainer}>
                    <button onClick={decrementImg} className={styles.backBtn}><BsChevronLeft className={styles.icon} /></button>
                  </div>
                    {imgElements[currImg]}
                  <div className={styles.arrowContainer}>
                    <button onClick={incrementImg} className={styles.forwardBtn}><BsChevronRight className={styles.icon} /></button>
                  </div>
                </div>
            </React.Fragment>
          );
      };

export default SlideShow;