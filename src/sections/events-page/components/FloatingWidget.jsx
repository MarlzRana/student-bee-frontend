import styles from "../styling/FloatingWidget.module.css";
import image from '../styling/placeholder.jpg';

function FloatingWidget(props) {
  const {eventName, description} = props;
  return (
    <div class={styles.floatingWidget}>
      <img src={image} alt = "Event Image"/>
        <div class={styles.description}>
          <h1>{props.eventName}</h1>
          <p>{props.description}</p>
          <a className={styles.btn} href="#" >Find out more</a>
        </div>
    </div>
  )
}

export default FloatingWidget