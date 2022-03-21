import styles from '../styling/WidgetSpinner.module.css';
import img from '../styling/placeholder.jpg';
import FloatingWidget from './FloatingWidget';
import Axios from 'axios';
import React, { useState, useEffect } from 'react';

function WidgetSpinner() {
  Axios.defaults.withCredentials = true;
  useEffect(() => {
    async function fetchData() {
      const lol = await Axios.get(
        process.env.REACT_APP_APIHOSTADDRESS +
          '/eventsSystem/top10MostRecentEvents'
      );
      return lol;
    }
    const fetchEvents = async () => {
      const res = await Axios.get(
        process.env.REACT_APP_APIHOSTADDRESS +
          '/eventsSystem/top10MostRecentEvents'
      );
      console.log(res);
    };
    fetchEvents();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.spinner}>
        <span className={styles.first}>
          <div className='eventWidget'>
            <FloatingWidget
              eventName='Music Event'
              description='lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sgaittis dictum mauris, eget tincidunt nulla dignissim ut. Quisque cursus ante placerat, auctor tellus vitae, accumsan neque. Etiam a tincidunt lorem. Nam magna erat, posuere vitae viverra nec, mollis sit amet libero. as da sda sd ad asd a '
              image={img}
            />
          </div>
        </span>
        <span className={styles.second}>
          <div className='eventWidget'>
            <FloatingWidget
              eventName='Music Event'
              description='lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sgaittis dictum mauris, eget tincidunt nulla dignissim ut. Quisque cursus ante placerat, auctor tellus vitae, accumsan neque. Etiam a tincidunt lorem. Nam magna erat, posuere vitae viverra nec, mollis sit amet libero. as da sda sd ad asd a '
              image={img}
            />
          </div>
        </span>
        <span className={styles.third}>
          <div className='eventWidget'>
            <FloatingWidget
              eventName='Music Event'
              description='lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sgaittis dictum mauris, eget tincidunt nulla dignissim ut. Quisque cursus ante placerat, auctor tellus vitae, accumsan neque. Etiam a tincidunt lorem. Nam magna erat, posuere vitae viverra nec, mollis sit amet libero. as da sda sd ad asd a '
              image={img}
            />
          </div>
        </span>
      </div>
    </div>
  );
}

export default WidgetSpinner;
