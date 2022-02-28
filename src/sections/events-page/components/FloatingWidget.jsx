import styles from "../styling/FloatingWidget.module.css";
import image from './placeholder.jpg';

function FloatingWidget(props) {
  return (
    <div class={styles.floatingWidget}>
        <div class={styles.contents}>
          <img src={image} alt = "Event Image"/>
          <div class={styles.description}>
            <h1>Music Fesitval</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
          </div>
        </div>
    </div>
  )
}

export default FloatingWidget