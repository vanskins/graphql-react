import React, { Component } from 'react'
import Header from './Header'
import { Switch, Route } from 'react-router-dom'
import CreateLink from './CreateLink'
import Login from './Login'
import LinkList from './LinkList'
import CreateBook from './CreateBook'

class App extends Component {
  render() {
    return (
      <div className='center w85'>
        <Header />
        <div className='ph3 pv1 background-gray'>
          <Switch>
            <Route exact path='/createBook' component={CreateBook} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/create' component={CreateLink} />
            <Route exact path='/' component={LinkList} />
          </Switch>
        </div>
      </div>
    )
  }
}

export default App