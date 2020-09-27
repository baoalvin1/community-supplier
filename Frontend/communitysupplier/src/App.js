import React, { Component } from 'react';
import './App.css';
import Heading from "./components/Heading"
import Dashboard from "./components/Dashboard"
import Form from "./components/Form"
import Tracking from "./components/Tracking"




export default class App extends Component {


constructor(){
  super()
  this.state={requesting:false}
}

setTrue(){
  this.setState({requesting:true})}



render(){

const mainComponent= this.state.requesting==true ? <Form/> : <Dashboard set={()=>this.setState({requesting:true})}/>




  return (
    <>
    <div className="App">
    <Heading></Heading>
    </div>
    <Tracking/>
   
    {mainComponent}
    
    </>
  );
    }
}

