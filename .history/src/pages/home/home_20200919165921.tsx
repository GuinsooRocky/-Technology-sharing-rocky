import React from 'react';
import styles from "./home.less";
import Fault from '../../component/Fault/fault.tsx';

interface Props {}
const Home: React.FC<Props> = () => {

  const wanted = {
    text: '奇奇宝贝屋',
    fontSize: '24px',
    themeColor: '#000',
    textColor: ['#74fcfd', '#ea3448']
  }

  return (
    <div className={styles['home']}>
      <aside className='left'>
        <Fault {...wanted} />
      </aside>
      <div className='right'>bbb</div>
    </div>
  )

}

export default Home;