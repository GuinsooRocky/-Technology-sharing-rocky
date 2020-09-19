import React from 'react';
import "./home.less";
import Fault from '../../component/Fault/faultMad';
import { useHistory } from 'react-router-dom';

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

  const history = useHistory();
  const goNext = (e: React.MouseEvent) => {
    console.log(history.push('/home'));
  }

  return (
    <div className='home' onClick={goNext}>
      <aside className='left'>
        {/* <Fault {...wantedLeft} /> */}
      </aside>
      <div className='right'>
        {/* <Fault {...wantedRight} /> */}
      </div>
    </div>
  )

}

export default Home;