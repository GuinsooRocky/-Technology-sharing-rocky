import React from 'react';
import { useHistory } from 'react-router-dom';

interface Props {}
const Reptiles: React.FC<Props> = (props) => {

  // const history = useHistory();
  // const goNext = (e: React.MouseEvent) => {
  //   history.push('/home');
  // }

  return (
    <div className='catalog'>
      <aside className='left'>
      </aside>
      <div className='right'>
      </div>
    </div>
  )

}

export default Reptiles;