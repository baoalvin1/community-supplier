import React, { Component } from 'react';
import Card from "./Card"
import addimage from "../add.svg"

const requests=[]

export default class Dashboard extends Component{


async componentDidMount(){
    const url="https://communitysupplier.uc.r.appspot.com"
    const response = await fetch(url)
    const content =  await response.json();
    this.setState({data:content})



}



render(){
return(
 <>   
  <img style={{marginLeft:"10%",cursor:"pointer"}} src={addimage} width="40vh" height="80vh" onClick={this.props.set}/>

<div className="grid-container">
  {requests.map((request)=>{
    return(
    <Card {...request} />
    )

  })}
</div>
</>
);
}
}