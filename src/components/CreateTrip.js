import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { validate } from '../utils/Validate';
import styles from '../styles/CreateTrip.module.css';
import logo from '../Assets/1646218790605.jpeg';

export default function CreateTrip() {
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [input, setInput] = useState({
    date: '',
    time: '',
    location: '',
    load: '',
    truckId: 0,
  });

  function handleInputChange(e) {
    e.preventDefault();
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    let errors = validate({ ...input, [e.target.name]: e.target.value });
    setErrors(errors);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setInput({
      date: '',
      time: '',
      location: '',
      load: '',
      truckId: '',
    });
    console.log(input);
    axios
      .post('https://tennders-backend.herokuapp.com', input)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
    alert('Trip scheduled!');
    navigate('/');
  }

  return (
    <div className={styles.createContainer}>
      <div>
        <Link to="/">
          <img className={styles.logoContainer} src={logo} alt="logo" />
        </Link>
      </div>
      <h1 className={styles.title}>New shipment</h1>

      <div>
        <div className={styles.formContainer}>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Date</label>
              <input
                className={styles.input}
                name="date"
                type="date"
                onChange={handleInputChange}
              />
            </div>
            {errors.date && <div className={styles.error}>{errors.date}</div>}
            <div>
              <label>Time</label>
              <select
                className={styles.input}
                name="time"
                onChange={handleInputChange}
              >
                <option value="DEFAULT" disabled>
                  Select time
                </option>
                <option value="morning">Morning</option>
                <option value="evening">Evening</option>
              </select>
            </div>
            {errors.time && <div className={styles.error}>{errors.time}</div>}

            <div>
              <label>Location</label>
              <input
                className={styles.input}
                name="location"
                type="text"
                onChange={handleInputChange}
              />
              {errors.location && (
                <div className={styles.error}>{errors.location}</div>
              )}
            </div>
            <div>
              <label>what are you going to load?</label>
              <input
                className={styles.input}
                name="load"
                type="text"
                onChange={handleInputChange}
              />
            </div>
            {errors.load && <div className={styles.error}>{errors.load}</div>}

            <div>
              <label>Select your truck</label>
              <input
                className={styles.input}
                name="truckId"
                type="number"
                min="1"
                max="10"
                onChange={handleInputChange}
              />
            </div>
            {errors.truckId && (
              <div className={styles.error}>{errors.truckId}</div>
            )}

            <div>
              {input.date !== '' &&
                !errors.time &&
                !errors.location &&
                !errors.load &&
                !errors.truckId && (
                  <button className={styles.button} onClick={handleSubmit}>
                    Submit
                  </button>
                )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
