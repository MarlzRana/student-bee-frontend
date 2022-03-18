import styles from "../styling/YellowWidget.module.css";

function YellowWidget(props) {
  const { eventName, eventDate, image } = props;
  return (
    <div class={styles.yellowWidget}>
      <a href="#details">
        <img src={image} alt="Event Image" />
        <div class={styles.description}>
          <h1>{eventName}</h1>
          <p>{eventDate}</p>
        </div>
      </a>  
    </div>
  );
}

export default YellowWidget;
