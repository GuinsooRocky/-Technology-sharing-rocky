import React from 'react';
import "./home.less";
import Fault from '../../component/Fault/faultMad';
import { history } from 'react-router-dom';

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
    console.log('1111')
    // history.push(null, '/foo')
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