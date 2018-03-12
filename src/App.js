import React, { Component } from 'react'
import store from './store'
import { Provider } from 'react-redux'
import {
  BrowserRouter as Router,
  Route,
  
} from 'react-router-dom'
import Index from './page/index/index'
import Detail from './page/detail/detail'
import Input from './input'
import List from './list'
import "./App.css"

export default class App extends Component {

  render() {
    return (
      <Provider store={store}> 
        <Router>
          <div>
            <div className="toptitle">这是顶部导航条</div>
            <Route exact path="/" component={Index}/>
            <Route exact path="/detail" component={Detail}/>            
          </div>
        </Router>
      </Provider>
    );
  }
}
