import React from 'react';
import styles from './Feedback.module.css';
import data from '../../../Data/Data.json'

const Feedback = () => {

    const { feedbackData } = data;

    return (
        <div className={styles.feedback_container}>
            <span className={styles.feedback_header}>Customer's Feedback</span>
            {feedbackData.map((feedback, index) => (
                <div className={styles.customer_block} key={index}>
                    <div className={styles.profile_block}>
                        <img src={feedback.profileImg} alt="profile" />
                        <span>{feedback.name}</span>
                    </div>
                    <div className={styles.stars_block}>
                        {[...Array(5)].map((_, i) => (
                            <img
                                key={i}
                                src={i < feedback.stars ? "/assets/star_yellow.png" : "/assets/star_white.png"}
                                alt="star"
                            />
                        ))}
                    </div>
                    <p>{feedback.review}</p>
                </div>
            ))}
        </div>
    );
};

export default Feedback;
