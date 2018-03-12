import React, { Component } from "react"
import { connect } from 'react-redux'


class Input extends Component{
    render(){
        const todo = this.props.items.map((value,index) => {
            return <li key = {index}>{value.text}</li>
          })
        return(
            <ul>
                {todo}
            </ul>
        )        
    }
}

function mapStateToProps(state){
    return{
        items:state.item
    }
}

export default connect(mapStateToProps)(Input);