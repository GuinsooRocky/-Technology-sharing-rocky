import React from 'react';
import "./home.less";
import Fault from '../../component/Fault/fault'

interface Props {}
const Home: React.FC<Props> = ({}) => {

  const wanted = {
    text: '趣谈前端',
    fontSize: '48px',
    themeColor: '#000',
    textColor: ['#74fcfd', '#ea3448']
  }

  return (
    <div className='home'>
      <aside className='left'>
        ssss
        <Fault {...wanted} />
      </aside>
      <div className='right'>bbb</div>
    </div>
  )

}

export default Home;