import React from 'react';
import styles from './first';

interface Props {}
const Home: React.FC<Props> = ({}) => {

  return (
    <div>
      <aside className={styles['left']}>aaa</aside>
      <div className={styles['right']}>bbb</div>
    </div>
  )

}

export default Home;