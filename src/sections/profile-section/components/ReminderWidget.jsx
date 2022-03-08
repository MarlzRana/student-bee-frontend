import styles from "../styling/ReminderWidget.module.css"

function ReminderWidget() {
    return (
    <div class={styles.widget}>
        <div class="container">
            <header class={styles.header}>
                <h1>Reminders</h1>
            </header>
            
            <body class={styles.body}>
                <p>09/10/2021 - Upcoming Event</p>
                <p>12/10/2021 - Upcoming Event</p>
                <p>15/12/2021 - Festival</p>
                <p>15/12/2021 - COMP10120 Assignment</p>
            </body>
        </div>
    </div>
);
}

export default ReminderWidget;