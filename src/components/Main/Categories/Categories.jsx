import React from 'react';
import styles from '../Main.module.css';
import data from '../../../Data/Data.json'

const Categories = () => {

    const { categoriesData } = data;

    return (
        <div className={styles.categories_container}>
            {categoriesData.map((category, index) => (
                <div key={index} className={styles.categories_block}>
                    <div className={styles.categories_right}>
                        <div 
                            className={styles.category_imgBlock} 
                            style={{ backgroundColor: category.backgroundColor }}
                        >
                            <img src={category.imgSrc} alt={category.text} />
                        </div>
                        <span>{category.text}</span>
                    </div>
                    <div className={styles.categories_left}>
                        <img src="/assets/forward_arrow.png" alt="forward arrow" />
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Categories;
