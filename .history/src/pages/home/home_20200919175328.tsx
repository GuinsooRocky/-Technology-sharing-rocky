import React from 'react';
import "./home.less";
import Fault from '../../component/Fault/fault.tsx';
import { History } from 'history';

interface Props {}
const Home: React.FC<Props> = (props) => {

  const wantedLeft = {
    text: '奇奇宝贝屋',
    fontSize: '24px',
    textColor: ['#74fcfd', '#ea3448']
  }

  const wantedRight = {
    text: '奇奇宝贝屋',
    fontSize: '24px',
    textColor: ['#ea3448', 'rgb(50, 150, 231)']
  }

  const goNext = (e: React.MouseEvent) => {

    History.go("/home");
  }

  return (
    <div className='home' onClick={goNext}>
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