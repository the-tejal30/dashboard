import React, {useState} from 'react';
import styles from './Header.module.css'

const Header = () => {
    const [menuActive, setMenuActive] = useState(false);

    const toggleMenu = () => {
        setMenuActive(!menuActive);
    };
    return (
        <div className={styles.header_container}>
            <div className={styles.searchbar_div}>
                <img src="/assets/search.svg" alt="search" />
                <input type="search" placeholder="Search" />
            </div>

            <div className={`${styles.right_sec} ${menuActive ? styles.active : ''}`}>
                <div className={`${styles.circular_block} ${styles.opt}`}>
                    <img src="/assets/mail.png" alt="email_icon" />
                </div>

                <div className={`${styles.circular_block} ${styles.opt}`}>
                    <img src="/assets/settings.svg" alt="settings_icon" />
                </div>

                <div className={`${styles.circular_block} ${styles.opt}`}>
                    <img src="/assets/notification_bell.svg" alt="notification_bell" />
                </div>

                <div className={`${styles.circular_block} ${styles.profile_pic}`}>
                    <img src="/assets/p7.png" alt="profile_img" />
                </div>
            </div>
            <div className={styles.menu_icon} onClick={toggleMenu}>
                <img src="/assets/menu.svg" alt="Menu" />
            </div>
        </div>
    )
}

export default Header
