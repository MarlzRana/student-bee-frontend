import styles from "../styling/YellowWidget.module.css";

function YellowWidget(props) {
  const { eventName, eventDate, image } = props;
  return (
    <div class={styles.yellowWidget}>
      <img src={image} alt="Event Image" />
      <div class={styles.description}>
        <h1>{eventName}</h1>
        <p>{eventDate}</p>
      </div>
    </div>
  );
}

export default YellowWidget;
