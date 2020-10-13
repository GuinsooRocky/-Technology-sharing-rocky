import React from 'react';
import "./fault.less";

interface Props {
  text: string,
  fontSize: string,
  themeColor: string,
  textColor: Array<string>
}
const Fault: React.FC<Props> = (props) => {

  const { text, fontSize, themeColor, textColor } = props

  return (
    <div className='blink'>
      <div className="blink-item" data-text={text} style={{fontSize: fontSize}}>
        <div className="text text-front" style={{color: textColor[0]}}>{text}</div>
        <div className="text text-back" style={{color: textColor[1]}}>{text}</div>
      </div>
    </div> 
  )

}

export default Fault;