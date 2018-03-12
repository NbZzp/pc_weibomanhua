import React, { Component } from 'react'
import './vcomic.css'
export default class vcomic extends Component{
    render(){
        return(
            <div className = "vcomicWrap">
                <dl className = "vcomivCont">
                   <dt className = "vcomicBig">1</dt>
                   <dd className = "vcomicLittle">2</dd> 
                   <dd className = "vcomicLittle">3</dd> 
                   <dd className = "vcomicLittle">4</dd> 
                   <dd className = "vcomicLittle">5</dd> 
                   <dd className = "vcomicLittle">6</dd> 
                   <dd className = "vcomicLittle">7</dd> 
                </dl>   
            </div>
        )
    }
}