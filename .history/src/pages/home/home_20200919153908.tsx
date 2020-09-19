import React from 'react';
import styles from './home.less';

interface Props {}
const Home: React.FC<Props> = ({}) => {
  const leftStyle = {
    width: '50%',
    background: '#202226',
    color: '#DFDDD9',
  }

  return (
    <div>
      <aside className={styles['left']} style={leftStyle}>aaa</aside>
      <div className={styles['right']}>bbb</div>
    </div>
  )

}

export default Home;