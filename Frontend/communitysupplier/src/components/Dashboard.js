import React, { Component } from 'react';
import Card from "./Card"

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
    
  
  
  
  ]
  


export default class Dashboard extends Component{

render(){
return(
 <>   
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