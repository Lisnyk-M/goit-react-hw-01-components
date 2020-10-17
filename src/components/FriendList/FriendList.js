import React from 'react';
import PropTypes, { bool } from 'prop-types';
import styles from './FriendList.module.css';
import FriendListItem from '../FriendListItem/FriendListItem';

const FriendList = ({friends}) => {
    console.log('friends: ', friends);
    return (

        <ul className={styles['friend-list']}>
            {friends.map(friend => {                
                return (
                <FriendListItem key={friend.id} avatar={friend.avatar} name={friend.name} isOnline={friend.isOnline}>

                </FriendListItem>
                )
            })}
        </ul>
    )
}

FriendList.propTypes = PropTypes.arrayOf(PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: bool.isRequired
})).isRequired;

export default FriendList;