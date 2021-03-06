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

  /* 之后写进arr里  MapSet的  省略号的  三目的运用及在JSX模板中如何避免三目  各种风骚的number的处理  TS的Partial等的运用
   * 在service层里处理出自己想要的数据及多对象的转出
   * 
  */
  const arrLeft = [
    {
      title: 'map与set数据结构的应用',
      context: 'dfghjkjhgfdfghjkj hgfdfg hjkhgfdf ghjkhgf ghjhgf dfghjh gfdfghj hgfdfghj',
      href: 'nnnnn',  // 点击跳转的路由
    },
  ]

  const goToDetail = () => {
    console.log('aaaaa')
  }

  return (
    <div className='catalog'>
      {/* <div className={styles['catalog_left']}> */}
      <div className='catalog_left'>
        {
          arr.map((item) => {
            return (
              <div className='left_item' key={item.index}>
                <a>{item.title}</a>
                <p>{item.context}</p>
              </div>
            )
          })
        }
        
      </div>
      <div className='catalog_right'>
        {
          arrLeft.map(item => {
            return (
              <div onClick={goToDetail}>
                <a>{item.title}</a>
                <p>{item.context}</p>
              </div>
            )
          })
        }
      </div>
    </div>
  )

}

export default Catalog;









  // const history = useHistory();
  // const goNext = (e: React.MouseEvent) => {
  //   history.push('/home');
  // }