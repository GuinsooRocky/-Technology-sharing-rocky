import React from 'react';
import "../Catalog/catalog.less";
import { useHistory } from 'react-router-dom';

interface Props {}
const Catalog: React.FC<Props> = (props) => {

  // const history = useHistory();
  // const goNext = (e: React.MouseEvent) => {
  //   history.push('/home');
  // }

  return (
    <div className='catalog'>
      <aside className='left'>
        aaaaa
      </aside>
      <div className='right'>
        bbbbbb
      </div>
    </div>
  )

}

export default Catalog;