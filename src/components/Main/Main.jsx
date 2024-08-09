import React from 'react';
import styles from './Main.module.css';
import BlockItem from './BlockItem/BlockItem.jsx';
import Categories from './Categories/Categories.jsx';
import RecentOrders from './RecentOrders/RecentOrders.jsx';
import Feedback from './Feedback/Feedback.jsx';
import NetProfit from './NetProfit/NetProfit.jsx';
import Activity from './Activity/Activity.jsx';
import data from '../../Data/Data.json';

const Main = () => {
    const { blockItemsData } = data;

    return (
        <div className={styles.main_container}>
            <header>Dashboard</header>
            <section className={styles.grid_container}>
                <div className={`${styles.area1}`}>
                    {blockItemsData.map((item, index) => (
                        <BlockItem
                            key={index}
                            imgText={item.imgText}
                            imgSrc={item.imgSrc}
                            imgColor={item.imgColor}
                            totalOrders={item.totalOrders}
                            percentage={item.percentage}
                            arrowImg={item.arrowImg}
                            percentageColor={item.percentageColor}
                        />
                    ))}
                </div>
                <div className={`${styles.grid_item} ${styles.area2}`}>
                    <NetProfit />
                </div>
                <div className={`${styles.grid_item} ${styles.area3}`}>
                    <Activity />
                </div>
                <div className={`${styles.grid_item} ${styles.area4}`}>
                    <Categories />
                </div>
                <div className={`${styles.grid_item} ${styles.area5}`}>
                    <RecentOrders />
                </div>
                <div className={`${styles.grid_item} ${styles.area6}`}>
                    <Feedback />
                </div>
            </section>
        </div>
    );
};

export default Main;
