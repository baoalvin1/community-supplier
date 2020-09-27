import React, { Component } from 'react';
import Card from "./Card"
import addimage from "../add.svg"



export default class Dashboard extends Component{


constructor(){
  super()
  this.state={data:[],fetched:false}
}

async componentDidMount(){
    const url="https://communitysupplier.uc.r.appspot.com"
    const response = await fetch(url)
    const content =  await response.json();
    this.setState({data:content.results,fetched:true})


}



render(){

  return(
 <>   
  <img style={{marginLeft:"10%",cursor:"pointer"}} src={addimage} width="40vh" height="80vh" onClick={this.props.set}/>

<div className="grid-container">

  { this.state.fetched===true ?  this.state.data.map((request)=>{
    return(
    <Card {...request} />
    )

  }):<></>}
</div>
</>
);
}
}