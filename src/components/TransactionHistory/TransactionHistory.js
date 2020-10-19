import React from 'react';
import PropTypes from 'prop-types';
import styles from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => (
    <table className={styles['transaction-history']} cellSpacing="1" border="1" cellPadding="5">
        <thead className={styles.thead}>
            <tr className={styles.row}>
                <th className={styles.head}>Type</th>
                <th className={styles.head}>Amount</th>
                <th className={styles.head}>Currency</th>
            </tr>
        </thead>

        <tbody>
            {items.map(item => (
                <tr className={styles.row} key={item.id}>
                    <td className={styles.data}>{item.type}</td>
                    <td className={styles.data}>{item.amount}</td>
                    <td className={styles.data}>{item.currency}</td>
                </tr>
            ))}
        </tbody>
    </table>
)


TransactionHistory.propTypes = PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired
})).isRequired

export default TransactionHistory;