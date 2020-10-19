import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

const Statistics = ({ title, stats }) => {
    const classRandomColor = () => {
        return `rgba(
        ${(Math.round(Math.random() * 255)).toString()},
        ${(Math.round(Math.random() * 255)).toString()},
        ${(Math.round(Math.random() * 255)).toString()}
    )`}

    return (
        <section className={styles.statistics}>
            {title ? <h2 className={styles.title}>{title}</h2> : null}

            <ul className={styles["stat-list"]}>
                {stats.map(item => (
                    <li key={item.id} className={styles.item} style={{ backgroundColor: classRandomColor() }}>
                        <span className={styles.label}>{item.label}</span>
                        <span className={styles.percentage}>{item.percentage}%</span>
                    </li>)
                )}
            </ul>
        </section>
    )
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.shape({
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired
    })).isRequired
}
export default Statistics;

