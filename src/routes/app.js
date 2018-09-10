import React from 'react'
import { Redirect, Route, Switch } from 'dva/router'
import Homepage from './home'
import NotFound from './404'
import Layout from 'components/Layout'
import AsyncDemo from './asyncDemo'
import Export from './export'
import Success from './success'
    
const App = (props) => {
  return (
    <Layout>
      <Switch>
        {/* <Route exact path='/' component={Homepage} />
        <Route path='/home' component={Homepage} /> */}
        <Route exact path='/' component={AsyncDemo} />
        <Route path='/success' component={Success} />
        <Route path='/export' component={Export} />
        <Route path='/404' component={NotFound} />
        <Redirect from='*' to='/404' />
      </Switch>
    </Layout>
  )
}

export default App
