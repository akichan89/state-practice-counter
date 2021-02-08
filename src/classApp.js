import React, { Component } from 'react';
import './App.css';

export class ClassApp extends Component {
    constructor(){
        super()

        this.state = {
            myStateVariable: 0
        }
    }

    render(){
        return(
    
    <div className="classIncrementor">
        <h2>Class Counter</h2>
    <button onClick = {()=> this.setState({
        myStateVariable: this.state.myStateVariable-1
    })
    }>-</button>

    <h1>{this.state.myStateVariable}</h1>

    <button onClick = {()=> this.setState({
       myStateVariable: this.state.myStateVariable+1
   })
   }>+</button>
   <button onClick = {() => this.setState({
       myStateVariable: 0
   })}>
       Reset
   </button>
   
   </div>
   
    )}
}
