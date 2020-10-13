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
      </aside>
      <div className='right'>
        <div className='right-title1 css-header'>
          <div className='css-context' >
            <h4>
              第一行title
            </h4>
          </div>
        </div>
      </div>
    </div>
  )

}

export default Catalog;