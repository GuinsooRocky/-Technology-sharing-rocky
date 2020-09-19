import React from 'react';
import "../home/home.less";
import { useHistory } from 'react-router-dom';

interface Props {}
const Catalog: React.FC<Props> = (props) => {

  // const history = useHistory();
  // const goNext = (e: React.MouseEvent) => {
  //   history.push('/home');
  // }

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

export default Catalog;