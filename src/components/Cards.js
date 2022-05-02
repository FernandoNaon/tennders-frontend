import React from 'react';
import Card from './Card';
import styles from '../styles/Cards.module.css';

export default function Cards({ schedule }) {
  return (
    <div className={styles.cardsContainer}>
      {schedule.length ? (
        schedule.map((el) => {
          return (
            <Card
              key={el.id}
              date={el.date}
              time={el.time}
              location={el.location}
              free={el.free}
              load={el.load}
              truck={el.truckId}
            />
          );
        })
      ) : (
        <p>Something went wrong!</p>
      )}
    </div>
  );
}
