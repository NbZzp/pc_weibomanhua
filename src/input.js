import React, { Component } from "react"
import { connect } from 'react-redux'
import { addTodo } from './creatActions'
class Input extends Component{
    render(){
        return(
            <input 
                onKeyUp = {this.props.handleInputChange}
            />
        )        
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        handleInputChange:(e)=>{
            if(e.keyCode === 13){
                dispatch(addTodo(e.target.value))
            }
        } 
    }
    
}

export default connect(null,mapDispatchToProps)(Input);