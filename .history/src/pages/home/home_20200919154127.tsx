import React from 'react';
import './home.less';

interface Props {}
const Home: React.FC<Props> = ({}) => {
  const leftStyle = {
    width: '50%',
    background: '#202226',
    color: '#DFDDD9',
  }

  return (
    <div className='home'>
      <aside className='left' style={leftStyle}>aaa</aside>
      <div className='right'>bbb</div>
    </div>
  )

}

export default Home;