import React from 'react';
import "../Catalog/catalog.less";
import { useHistory } from 'react-router-dom';
// import styles from '../Catalog/catalog.less';

interface Props {}
const Catalog: React.FC<Props> = (props) => {

  // const history = useHistory();
  // const goNext = (e: React.MouseEvent) => {
  //   history.push('/home');
  // }

  return (
    <div className='catalog'>
      {/* <div className={styles['catalog_left']}> */}
      <div className='catalog_left'>
        <div>
          <h4>js技巧的实践与工具</h4>
          <p></p>
        </div>
      </div>
      <div className='catalog_right'>
      </div>
    </div>
  )

}

export default Catalog;