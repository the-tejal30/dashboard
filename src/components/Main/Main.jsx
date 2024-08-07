import React from 'react';
import styles from './Main.module.css';
import BlockItem from './BlockItem/BlockItem.jsx'
import Categories from './Categories/Categories.jsx';
import RecentOrders from './RecentOrders/RecentOrders.jsx';
import Feedback from './Feedback/Feedback.jsx';
import NetProfit from './NetProfit/NetProfit.jsx';
import Activity from './Activity/Activity.jsx';

const Main = () => {
    const blockItemsData = [
        { imgSrc: "/assets/basket.png", imgText: "Total Orders", imgColor: "var(--c-blue1)", totalOrders: "75", percentage: 3, arrowImg: "/assets/green_up_arrow.png", percentageColor: "var(--c-teal2)"},
        { imgSrc: "/assets/bag_green.png", imgText: "Total Delivered", imgColor: "var(--c-green1)", totalOrders: "70", percentage: 3, arrowImg: "/assets/red_down_arrow.png", percentageColor: "var( --c-red3)"},
        { imgSrc: "/assets/red_bag.png", imgText: "Total Cancelled", imgColor: "var(--c-red1)", totalOrders: "05", percentage: 3, arrowImg: "/assets/green_up_arrow.png", percentageColor: "var(--c-teal2)"},
        { imgSrc: "/assets/price_down.png", imgText: "Total Revenue", imgColor: "var(--c-red2)", totalOrders: "$12k", percentage: 3, arrowImg: "/assets/red_down_arrow.png", percentageColor: "var( --c-red3)"},
    ];

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
