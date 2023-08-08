import React from 'react';
import CountUp from 'react-countup';
import styles from './style.module.css';


export default function counter( props ) {
  const { end, title } = props;
  return (
    <div className={styles.circles}>
      <CountUp className={ styles.counters } prefix='+' end={end} duration={5} />
      { title }
    </div>
  )
}
