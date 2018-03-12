import React, { Component } from 'react'

import {

  Link
} from 'react-router-dom'

import Swiper from '../../components/swiper/swiper'
import Vcomic from '../../components/Vcomic/vcomic'
import Lis from '../../components/rank/rank'


export default class App extends Component {

  render() {
    return (

        <div>
          <Swiper/>
          <div>
            <Vcomic/>
            <Lis/>
          </div>
          
        </div>

    );
  }
}
