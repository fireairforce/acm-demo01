import React from 'react'
import { relative, isAbsolute } from 'path';
// import Background from './404.png'
const styleP = {
  textAlign: 'center',
  fontFamily: 'cursive',
  fontSize: 35,
  marginTop: '14%'
}
const styleH = {
  textAlign: 'center',
  fontFamily: 'cursive',
  fontSize: 100
}
export default () => {
  return (
    <div style ={{
      backgroundImage: "url(" + "http://pdx2xd16q.bkt.clouddn.com/404.png"+ ")", 
      width:3000,
      height:1800,
      textAlign: 'center',
      marginLeft: '8%',
    }} >
    </div>
  )
}
