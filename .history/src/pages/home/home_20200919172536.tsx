import React from 'react';
import "./home.less";
import Fault from '../../component/Fault/fault.tsx';

interface Props {}
const Home: React.FC<Props> = () => {

  const wantedLeft = {
    text: '奇奇宝贝屋',
    fontSize: '24px',
    textColor: ['#74fcfd', '#ea3448']
  }

  const wantedRight = {
    text: '奇奇宝贝屋',
    fontSize: '24px',
    textColor: ['#ea3448', '#74fcfd']
  }

  return (
    <div className='home'>
      <aside className='left'>
        <Fault {...wantedLeft} />
      </aside>
      <div className='right'>
        <Fault {...wantedRight} />
      </div>
    </div>
  )

}

export default Home;