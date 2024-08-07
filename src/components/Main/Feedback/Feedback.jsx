import React from 'react';
import styles from './Feedback.module.css';

const Feedback = () => {
    const feedbackData = [
        {
            name: "Jenny Wilson",
            profileImg: "/assets/p7.png",
            stars: 4,
            review: "The food was excellent and so was the service. I had the mushroom risotto with scallops which was awesome. I had a burger over greens (gluten-free) which was also very good. They were very conscientious about gluten allergies."
        },
        {
            name: "Dianne Russell",
            profileImg: "/assets/p8.png",
            stars: 5,
            review: "We enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect service"
        },
        {
            name: "Devon Lane",
            profileImg: "/assets/p4.png",
            stars: 4,
            review: "Normally wings are wings, but theirs are lean, meaty, and tender, and absolutely divine! The flavor is rich and savory, and the texture is so tender it just falls off the bone. I've never had wings like these before - they're a game-changer! The lean meatiness makes them feel like a gourmet treat, and I'm hooked! I could eat them every day and never get tired of them. 10/10 would recommend!"
        }
    ];

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
