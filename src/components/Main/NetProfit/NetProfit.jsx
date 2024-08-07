import React from 'react'
import styles from './NetProfit.module.css'
import ProgressBar from './ProgressBar'

const NetProfit = () => {
  return (
    <div className={styles.NetProfit_Container}>
      <div className={styles.netprofit_right}>
        <span className={styles.netProfit_txt}>Net Profit</span>
        <span className={styles.netProfit_amount}>$ 6759.25</span>
        <div className={styles.netProfit_percentage}>
            <img src="/assets/parrotcolor_up_arrow.png" alt="arrow" />
            <span>3%</span>
        </div>
      </div>
      <div className={styles.netprofit_left}>
        <ProgressBar />
        <p>*The values here has been rounded off.</p>
      </div>
    </div>
  )
}

export default NetProfit
