import React from 'react';
import styles from './home.less'

interface Props {}
const Home: React.FC<Props> = ({}) => {

  return (
    <div>
      <div className={styles['left']}>aaa</div>
      <div className={styles['right']}>bbb</div>
    </div>
  )

}

export default Home;