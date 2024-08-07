// BlockItem.js
import React from 'react';
import styles from '../Main.module.css';

const BlockItem = ({ imgSrc, imgText, imgColor, totalOrders, percentage, arrowImg, percentageColor }) => {
    return (
        <div className={styles.area1_blocks}>
            <div className={styles.img_text_block}>
                <div className={styles.img_block} style={{ backgroundColor: imgColor }}>
                    <img src={imgSrc} alt="img" />
                </div>
                <span>{imgText}</span>
            </div>
            <div className={styles.numbers}>
                <span className={styles.no}>{totalOrders}</span>
                <div className={styles.percentage_block}>
                    <img src={arrowImg} alt="arrow" />
                    <span style={{ color: percentageColor }}>{percentage}%</span>
                </div>
            </div>
        </div>
    );
};

export default BlockItem;
