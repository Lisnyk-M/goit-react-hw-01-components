import React from 'react';
import PropTypes from 'prop-types';
import styles from './FriendListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
    const statusClass = [];
    statusClass.push(styles.status);
    statusClass.push(isOnline ? styles.onLine : styles.offLine);

    return (
        <li className={styles.item}>
            <span className={statusClass.join(' ')} />
            <img className={styles.avatar} src={avatar} alt="" width="48" />
            <p className={styles.name}>{name}</p>
        </li>
    )
}

FriendListItem.propTypes = PropTypes.objectOf(PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired
})).isRequired;
export default FriendListItem;