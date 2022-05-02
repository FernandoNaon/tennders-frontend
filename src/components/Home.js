import { useState, useEffect } from 'react';
import axios from 'axios';
import Cards from './Cards';
import Button from './Button';
import styles from '../styles/Home.module.css';
import logo from '../Assets/logo.png';

function Home() {
  const baseURL = 'https://tennders-backend.herokuapp.com';
  // const baseURL1 = 'http://localhost:3001/trucks';

  const [schedule, setSchedule] = useState([]);

  const getData = async () => {
    try {
      const res = await axios.get(baseURL);
      setSchedule(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(schedule);

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className={styles.homeContainer}>
      <div className={styles.inSideC}>
        <img className={styles.logo} src={logo} alt="logo" />

        <div>
          <Button />
        </div>
        <div>
          <Cards schedule={schedule} />
        </div>
      </div>
    </div>
  );
}

export default Home;
