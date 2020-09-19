import React from 'react';
import "../Home/home.less";
import { useHistory } from 'react-router-dom';

interface Props {}
const Catalog: React.FC<Props> = (props) => {

  // const history = useHistory();
  // const goNext = (e: React.MouseEvent) => {
  //   history.push('/home');
  // }

  return (
    <div className='home'>
      <aside className='left'>

      </aside>
      <div className='right'>
        
      </div>
    </div>
  )

}

export default Catalog;