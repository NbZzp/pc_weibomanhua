import React, { Component } from 'react'
import "./rank.css"
import { Link } from 'react-router-dom'
export default class rank extends Component{
    constructor(){
        super()
        this.state = {
            list:["周榜","月榜"],
            content:[
                {
                    lis:["火影忍者","火影忍者","火影忍者","火影忍者","火影忍者"]
                },
                {
                    lis:["海贼王","海贼王","海贼王","海贼王","海贼王"]
                }
            ],
            num:0
        }
    this.handleClick = this.handleClick.bind(this)
    }
    render(){
        const list = this.state.list.map((item, index) => {
			return <span className="header-item" key={index} onClick = {this.handleClick.bind(this,index)}>{item}</span>
        })
        const lis = this.state.content[this.state.num].lis.map((item, index) => {
			return <li className="header-li" key={index}><Link to = {"./detail"}>{item}</Link></li>
		})
        return(
            <div className = "rankWrap">
                <p>
                    {list}
                </p>
                <ul>
                    {lis}
                </ul>
                 
            </div>
        )
    }
    handleClick(index){
        this.setState({num:index})
    }
}