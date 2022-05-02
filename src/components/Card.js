import React from 'react';
import styles from '../styles/Card.module.css';

const Card = ({ date, truck, time, free, location, load }) => {
  return (
    <div className={styles.cardContainer}>
      <p>{date}</p>
      <p>{time}</p>
      <h3>Truck {truck}</h3>
      {free == true ? <p>Free</p> : null}
      {!location && free == false ? <p>Unavailable</p> : null}
      <p>{load}</p>
      <p>{location}</p>
    </div>
  );
};

export default Card;
