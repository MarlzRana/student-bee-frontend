import styles from './EditProfile.module.css';
import { Suspense, lazy } from "react";

const LeftPanel = lazy(() => import('./components/LeftPanel'));

function EditProfile() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <div className={styles.editProfile}>
                <div className={styles.leftProfilePanel}><LeftPanel/></div>
                <div className={styles.editSection}> 
                    <form className={styles.editProfileForm}>
                        <div className={styles.leftColumn}>
                            <div className={styles.formBio}>
                                <label htmlFor='aboutMe'>Bio</label>
                                <br/>
                                <textarea
                                    placeholder='150 characters limit'
                                    name='aboutMe'
                                    id='aboutMe'
                                />
                            </div>
                            <div className={styles.formEditInput}>
                                <label htmlFor='FirstName'>First Name</label>
                                <br/>
                                <input
                                    type='text'
                                    name='FirstName'
                                    id='FirstName'
                                />
                            </div>
                            <div className={styles.formEditInput}>
                                <label htmlFor='LastName'>Last Name</label>
                                <br/>
                                <input
                                    type='text'
                                    name='LastName'
                                    id='LastName'
                                />
                            </div>
                            <div className={styles.formEditInput}>
                                <label htmlFor='dob'>Date of Birth</label>
                                <input
                                    type='date'
                                    name='dob'
                                    id='dob'
                                />
                            </div>
                            <div className={styles.formEditInput}>
                                <label htmlFor='year'>Year</label>
                                <br/>
                                <select name="year" id="year">
                                    <option value="first">1st</option>
                                    <option value="second">2nd</option>
                                    <option value="third">3rd</option>
                                    <option value="fourth">4th</option>
                                </select>
                            </div>
                            <div className={styles.formEditInput}>
                                <label htmlFor='course'>Course</label>
                                <br/>
                                <input
                                    type='text'
                                    name='course'
                                    id='course'
                                />
                            </div>
                        </div>
                        <div className={styles.rightColumn}>
                            <div className={styles.formEditInput}>
                                <label htmlFor='username'>Username</label>
                                <br/>
                                <input
                                    type='text'
                                    name='username'
                                    id='username'
                                />
                            </div>
                            <div className={styles.formEditInput}>
                                <label htmlFor='email'>Email Address</label>
                                <br/>
                                <input
                                    type='text'
                                    name='email'
                                    id='email'
                                />
                            </div>
                            <div className={styles.formEditInput}>
                                <label htmlFor='psw'>Current Password</label>
                                <br/>
                                <input
                                    type='password'
                                    name='psw'
                                    id='psw'
                                />
                            </div>
                            <div className={styles.formEditInput}>
                                <label htmlFor='newPassword'> New Password</label>
                                <br/>
                                <input
                                    type='password'
                                    name='newPassword'
                                    id='newPassword'
                                />
                            </div>
                            <div className={styles.formEditInput}>
                                <label htmlFor='confirmNewPassword'>Confirm New Password</label>
                                <br/>
                                <input
                                    type='password'
                                    name='confirmNewPassword'
                                    id='confirmNewPassword'
                                />
                            </div>
                            
                            <div className={styles.warningMessage}>Warning! This action is irreversible</div>
                            <button className={styles.deleteProfileButton}>Delete Profile</button>
                            <button className={styles.saveChangesButton}>Save Changes</button>  
                        </div>    
                    </form>
                </div>
            </div>  
        </Suspense>    
    );
}

export default EditProfile;