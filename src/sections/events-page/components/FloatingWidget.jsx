import styles from "../styling/FloatingWidget.module.css";

function FloatingWidget(props) {
  const { eventName, description, image } = props;
  return (
    <div class={styles.floatingWidget}>
      <img src={image} alt="Event Image" />
      <div class={styles.description}>
        <h1>{eventName}</h1>
        <p>{description}</p>
        <a className={styles.btn} href="#">
          Find out more
        </a>
      </div>
    </div>
  );
}

export default FloatingWidget;
