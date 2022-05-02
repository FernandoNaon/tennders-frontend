import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Button.module.css';

export default function Button() {
  return (
    <div>
      <Link to="/create">
        <button className={styles.button}>Let's start!</button>
      </Link>
    </div>
  );
}
