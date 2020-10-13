import React from 'react';
import "../Catalog/catalog.less";
import { useHistory } from 'react-router-dom';
// import styles from '../Catalog/catalog.less';

interface Props {}
const Catalog: React.FC<Props> = (props) => {

  const arr = [
    {
      index: 'top_one',
      title: '一 js技巧的实践与工具的分享',
      context: '10个小技巧 让你掌握快速开发',
    },
    {
      index: 'top_two',
      title: '一 js技巧的实践与工具的分享',
      context: '10个小技巧 让你掌握快速开发',
    },
  ]

  // const history = useHistory();
  // const goNext = (e: React.MouseEvent) => {
  //   history.push('/home');
  // }

  return (
    <div className='catalog'>
      {/* <div className={styles['catalog_left']}> */}
      <div className='catalog_left'>
        {
          arr.map(item => {
            return (
              <div key={item.index}>
                <a>{item.title}</a>
                <p>{item.context}</p>
              </div>
            )
          })
        }
        
      </div>
      <div className='catalog_right'>
      </div>
    </div>
  )

}

export default Catalog;