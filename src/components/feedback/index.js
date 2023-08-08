import React from 'react';
import { feedback } from '../../utils/data.js';
import styles from './style.module.css';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";

export default function Feedback() {

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <div className={ styles.container }>
      <Carousel 
       infinite={true}
       ssr={true}
       autoPlay={true}
       autoPlaySpeed={10000}
       removeArrowOnDeviceType={["tablet", "mobile"]}
       responsive={responsive}>
        {feedback.map((item, index) => (
          <div key={index} className={styles.feedbackItem}>
          <img src={item.img} alt={item.name} />
          <h1>{ item.name }</h1>
          { item.text }
        </div>)) }
      </Carousel>
    </div>
  )
}
