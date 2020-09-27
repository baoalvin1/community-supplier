import React, { Component } from 'react';
import Card from "./Card"
import addimage from "../add.svg"

const requests=[

    {
    hospitalName:"Baptist Hospital",
    itemType:"Ventilators",
    quantityAsked:10,
    address:"Kendall Drive",
    hasFile:true
    },
    
    {
      hospitalName:"Miami Hospital",
      itemType:"Inhalers",
      quantityAsked: 40 ,
      address:"109 SW",
      hasFile:false
      },
      {
        hospitalName:" Fake Hospital",
        itemType:"Guns",
        quantityAsked: 2 ,
        address:"123 SW",
        hasFile:true
        },
    {
        hospitalName:" dakfjv nfv",
        itemType:"Weapons",
        quantityAsked: 22 ,
        address:"123 SW",
        hasFile:true
        },
        {
        
        hospitalName:"Among Us",
        itemType:"Imposter",
        quantityAsked: -1 ,
        address:"123 SW",
        hasFile:true
        },
        {
          hospitalName:"Grand Thheft",
          itemType:"Weapons Of mass Destruc",
          quantityAsked: "Infity " ,
          address:"109 SW",
          hasFile:false
          }
  
  
  
  ]
  


export default class Dashboard extends Component{

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