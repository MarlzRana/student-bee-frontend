import styles from "../styling/YellowWidget.module.css";
// import image from '../styling/placeholder.jpg';

// const widgetStyle = {
//   backgroundImage: image,
// };

function FloatingWidget(props) {
  const { eventName, eventDate, image } = props;
  return (
    <div class={styles.yellowWidget}>
      <img src={image} alt="Event Image" />
      {/* <div class={styles.description}>
        <h1>{eventName}</h1>
        <p>{eventDate}</p>
      </div> */}
      <h1>{eventName}</h1>
      <p>{eventDate}</p>
    </div>
  );
}

export default FloatingWidget;
