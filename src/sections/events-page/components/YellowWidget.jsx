import styles from "../styling/YellowWidget.module.css";
// import image from '../styling/placeholder.jpg';

function FloatingWidget(props) {
  const { eventName, eventDate } = props;
  return <div class={styles.yellowWidget}></div>;
}

export default FloatingWidget;
