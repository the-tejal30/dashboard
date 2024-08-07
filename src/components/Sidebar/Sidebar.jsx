import React, { useState } from 'react';
import styles from './Sidebar.module.css';

const Sidebar = () => {
  const [homeIcon, setHomeIcon] = useState('/assets/home.svg');
  const [chartIcon, setChartIcon] = useState('/assets/bar_chart_outline.svg');
  const [confirmationIcon, setConfirmationIcon] = useState('/assets/acceptance-confirmation.svg');
  const [walletIcon, setWalletIcon] = useState('/assets/wallet.svg');
  const [bagIcon, setBagIcon] = useState('/assets/bag.svg');

  const handleIconClick = (iconState, iconSetter, defaultPath, activePath) => {
    const newPath = iconState === defaultPath ? activePath : defaultPath;
    iconSetter(newPath);
  };

  return (
    <div className={styles.sidebar_container}>
      <div className={styles.top_container}>
        <div className={styles.logo_block}>
          <img src="/assets/logo.png" alt="logo" />
        </div>
        <div className={styles.options_block}>
          <img 
            src={homeIcon} 
            alt="home" 
            onClick={() => handleIconClick(homeIcon, setHomeIcon, '/assets/home.svg', '/assets/home_blue.svg')} 
          />
          <img 
            src={chartIcon} 
            alt="chart" 
            onClick={() => handleIconClick(chartIcon, setChartIcon, '/assets/bar_chart_outline.svg', '/assets/bar_chart_blue.svg')} 
          />
          <img 
            src={confirmationIcon} 
            alt="confirmation" 
            onClick={() => handleIconClick(confirmationIcon, setConfirmationIcon, '/assets/acceptance-confirmation.svg', '/assets/accept_outline.svg')} 
          />
          <img 
            src={walletIcon} 
            alt="wallet" 
            onClick={() => handleIconClick(walletIcon, setWalletIcon, '/assets/wallet.svg', '/assets/wallet_blue.svg')} 
          />
          <img 
            src={bagIcon} 
            alt="bag" 
            onClick={() => handleIconClick(bagIcon, setBagIcon, '/assets/bag.svg', '/assets/bag_blue.svg')} 
          />
        </div>
      </div>
      <div className={styles.bottom_container}>
        <img 
          src='/assets/logout.png' 
          alt="logout" 
        />
      </div>
    </div>
  );
};

export default Sidebar;
