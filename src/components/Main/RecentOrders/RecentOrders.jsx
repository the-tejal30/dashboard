import React from 'react';
import styles from './RecentOrders.module.css';

const orders = [
  {
    customer: 'Jane Cooper',
    orderNo: '48965786',
    amount: '$365.02',
    status: 'Delivered',
    imgSrc: '/assets/p1.png'
  },
  {
    customer: 'Wade Warren',
    orderNo: '15478256',
    amount: '$124.00',
    status: 'Delivered',
    imgSrc: '/assets/p3.png'
  },
  {
    customer: 'Guy Hawkins',
    orderNo: '78958215',
    amount: '$45.88',
    status: 'Cancelled',
    imgSrc: '/assets/p5.png'
  },
  ,
  {
    customer: 'Kristin Watson',
    orderNo: '20965732',
    amount: '$65.00',
    status: 'Pending',
    imgSrc: '/assets/p6.png'
  },
  ,
  {
    customer: 'Cody Fisher',
    orderNo: '56489636',
    amount: '$268.00',
    status: 'Delivered',
    imgSrc: '/assets/p9.png'
  },
  ,
  {
    customer: 'Savannah Nguyen',
    orderNo: '41253685',
    amount: '$128.00',
    status: 'Delivered',
    imgSrc: '/assets/p2.png'
  },
];

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

const RecentOrders = () => {
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
