import React from 'react';
import "./home.less";

interface Props {}
const Home: React.FC<Props> = ({}) => {

  return (
    <div className='home'>
      <aside className='left'>
        <div className="blink-item">
          <div className="text text-back">趣谈前端</div>
        </div>
      </aside>
      <div className='right'>bbb</div>
    </div>
  )

}

export default Home;