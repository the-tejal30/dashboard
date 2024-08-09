import React from 'react';
import styles from './RecentOrders.module.css';
import data from '../../../Data/Data.json'





const RecentOrders = () => {

  const { orders } = data;

  const getStatusClassName = (status) => {
    switch (status) {
      case 'Delivered':
        return styles['status-delivered'];
      case 'Pending':
        return styles['status-pending'];
      case 'Cancelled':
        return styles['status-cancelled'];
      default:
        return '';
    }
  };

  return (
    <div className={styles.recentorders_container}>
      <span className={styles.recentorders_header}>Recent Orders</span>
      <div className={styles.table_wrapper}>
        <table>
          <thead>
            <tr>
              <th>Customer</th>
              <th>Order No.</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={index}>
                <td>
                  <img src={order.imgSrc} alt="profile_photo" />
                  <span>{order.customer}</span>
                </td>
                <td>{order.orderNo}</td>
                <td>{order.amount}</td>
                <td className={`${styles.status} ${getStatusClassName(order.status)}`}>{order.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentOrders;
