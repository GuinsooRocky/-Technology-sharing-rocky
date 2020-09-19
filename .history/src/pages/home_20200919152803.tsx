import React from 'react';
import styles from './home.less'

interface Props {}
const Home: React.FC<Props> = ({}) => {

  return (
    <div>
      <div className={styles['left']}></div>
      <div className={styles['right']}></div>
    </div>
  )

}

export default Home;