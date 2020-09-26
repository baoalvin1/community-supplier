import React, { Component } from 'react';
import './App.css';
import Heading from "./components/Heading"
import Dashboard from "./components/Dashboard"
import Form from "./components/Form"
import addimage from "./add.svg"




export default class App extends Component {


constructor(){
  super()
  this.state={requesting:false}
}

render(){

const mainComponent= this.state.requesting==true ? <Form/> : <Dashboard/>




  return (
    <>
    <div className="App">
    <Heading></Heading>
    </div>
    <img style={{marginLeft:"10%"}} src={addimage} width="40vh" height="80vh" onClick />

    {mainComponent}
    
    </>
  );
    }
}

