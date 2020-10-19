import React from 'react';
import Section from './Section';
import Profile from './Profile/Profile';
import user from './Profile/user.json';
import statisticalData from './Statistics/statistical-data.json';
import friendsData from './FriendList/friends.json';
import Statistics from './Statistics/Statistics';
import FriendList from './FriendList/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import TransactionHistoryData from './TransactionHistory/TransactionHistory.json';

export default function App() {
    return (
        <>
            <Section>
                <Profile
                    name={user.name}
                    tag={user.tag}
                    location={user.location}
                    avatar={user.avatar}
                    stats={user.stats}
                />
            </Section>

            <Statistics title="Upload stats" stats={statisticalData} />

            <Section>
                <FriendList friends={friendsData} />
            </Section>

            <Section>
                <TransactionHistory items={TransactionHistoryData} />
            </Section>
        </>
    )
}