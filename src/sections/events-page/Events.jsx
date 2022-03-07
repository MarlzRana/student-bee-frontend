import { Suspense, lazy } from 'react';
import styles from "./Events.module.css";
import img from "./styling/placeholder.jpg";

const FloatingWidget = lazy(() => import('./components/FloatingWidget'));

function Events() {
  return (
    <div className={styles.events}>
      <Suspense fallback={<div>Loading...</div>}>
        <div className={styles.container}>
          <div className={styles.spinner}>
              <span className={styles.first}>
                <div className='eventWidget'>
                  <FloatingWidget eventName="Music Event" description="lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sgaittis dictum mauris, eget tincidunt nulla dignissim ut. Quisque cursus ante placerat, auctor tellus vitae, accumsan neque. Etiam a tincidunt lorem. Nam magna erat, posuere vitae viverra nec, mollis sit amet libero. as da sda sd ad asd a " image={img} />
                </div>  
              </span> 
              <span className={styles.second}>
                <div className='eventWidget'>
                  <FloatingWidget eventName="Music Event" description="lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sgaittis dictum mauris, eget tincidunt nulla dignissim ut. Quisque cursus ante placerat, auctor tellus vitae, accumsan neque. Etiam a tincidunt lorem. Nam magna erat, posuere vitae viverra nec, mollis sit amet libero. as da sda sd ad asd a " image={img} />
                </div>  
              </span> 
              <span className={styles.third}>
                <div className='eventWidget'>
                  <FloatingWidget eventName="Music Event" description="lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sgaittis dictum mauris, eget tincidunt nulla dignissim ut. Quisque cursus ante placerat, auctor tellus vitae, accumsan neque. Etiam a tincidunt lorem. Nam magna erat, posuere vitae viverra nec, mollis sit amet libero. as da sda sd ad asd a " image={img} />
                </div>  
              </span> 
          </div>  
        </div>
      </Suspense>  
    </div>
  )
}

export default Events