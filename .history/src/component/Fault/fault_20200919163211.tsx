import React from 'react';
import "./fault.less";

interface Props {
  text: string,
  fontSize: string,
  themeColor: string,
  textColor: Array<string>
}
const Fault: React.FC<Props> = (props) => {

  const {
    text = '奇奇宝贝屋',
    fontSize = '48px',
    themeColor = '#000',
    textColor = ['#74fcfd', '#ea3448']
  } = props

  return (
    <div className='blink' style={{backgroundColor: themeColor}}>
      <div className="blink-item" data-text={text} style={{fontSize: fontSize}}>
        <div className="text text-front" style={{color: textColor[0]}}>{text}</div>
        <div className="text text-back" style={{color: textColor[1]}}>{text}</div>
      </div>
    </div> 
  )

}

export default Fault;