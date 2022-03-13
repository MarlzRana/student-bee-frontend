import styles from '../styling/TweetUI.module.css';
import pic from './DefaultProfilePic.jpg';
import Tweet from './Tweet';

function TweetUI() {
    return(
        <div className={styles.container}>
            <form className={styles.fieldContainer}>
                <textarea className={styles.field} placeholder='What are you up to today?' />
            </form>
            <div className={styles.feed}>
                <Tweet userImage={pic} name='Akmal Rizal' time="30 minutes ago" post='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer volutpat arcu odio, sit amet venenatis erat suscipit in. Duis feugiat pretium magna eget hendrerit. Fusce hendrerit risus quis laoreet faucibus. Cras nec augue libero.'/>
                <Tweet userImage={pic} name='Akmal Rizal' time="30 minutes ago" post='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer volutpat arcu odio, sit amet venenatis erat suscipit in. Duis feugiat pretium magna eget hendrerit. Fusce hendrerit risus quis laoreet faucibus. Cras nec augue libero.'/>
                <Tweet userImage={pic} name='Akmal Rizal' time="30 minutes ago" post='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer volutpat arcu odio, sit amet venenatis erat suscipit in. Duis feugiat pretium magna eget hendrerit. Fusce hendrerit risus quis laoreet faucibus. Cras nec augue libero.'/>
                <Tweet userImage={pic} name='Akmal Rizal' time="30 minutes ago" post='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer volutpat arcu odio, sit amet venenatis erat suscipit in. Duis feugiat pretium magna eget hendrerit. Fusce hendrerit risus quis laoreet faucibus. Cras nec augue libero.'/>
                <Tweet userImage={pic} name='Akmal Rizal' time="30 minutes ago" post='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer volutpat arcu odio, sit amet venenatis erat suscipit in. Duis feugiat pretium magna eget hendrerit. Fusce hendrerit risus quis laoreet faucibus. Cras nec augue libero.'/>
                <Tweet userImage={pic} name='Akmal Rizal' time="30 minutes ago" post='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer volutpat arcu odio, sit amet venenatis erat suscipit in. Duis feugiat pretium magna eget hendrerit. Fusce hendrerit risus quis laoreet faucibus. Cras nec augue libero.'/>
            </div>
        </div>
    )
}

export default TweetUI