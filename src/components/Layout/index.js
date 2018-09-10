/**
 * Created by out_xu on 17/7/13.
 */
import React from 'react'
import { Link } from 'react-router-dom'
import './index.less'

const LayoutContent = (props) => {
  return (
    <div className='App'>
      <div className='App-header'>
        <img src={"http://pdx2xd16q.bkt.clouddn.com/acm.png"} alt='logo' className='App-logo' />
      </div>

      <header className='App-nav'>
        NEUQACMclub招新报名表
      </header>
      <div className='App-content'>
        {props.children}
      </div>
    </div>
  )
}

export default LayoutContent
