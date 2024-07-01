import React from 'react';
import styles from './FeedbackCard.module.css';

const FeedbackCard = ({ name, description, title, feedback, image, rating }) => {
    const renderStars = () => {
        const fullStars = Array(rating).fill('★');
        const emptyStars = Array(5 - rating).fill('★');
        return (
            <div className={styles.rating}>
                {fullStars.map((star, index) => (
                    <span key={index} className={styles.fullStar}>{star}</span>
                ))}
                {emptyStars.map((star, index) => (
                    <span key={index + rating} className={styles.emptyStar}>{star}</span>
                ))}
            </div>
        );
    };

    return (
        <div className={styles.card}>
            <img src={image} alt={name} className={styles.image} />
            <h3 className={styles.name}>{name}</h3>
            <p className={styles.description}>{description}</p>
            <h4 className={styles.title}>{title}</h4>
            <p className={styles.feedback}>{feedback}</p>
            {renderStars()}
        </div>
    );
};

export default FeedbackCard;
