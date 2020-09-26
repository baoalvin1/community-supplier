import React from 'react';
import './App.css';
import Heading from "./components/Heading"
import Card from "./components/Card"

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


function App() {
  return (
    <div className="App">
    <Heading></Heading>
    <div className="grid-container">
      {requests.map((request)=>{
        return(
        <Card {...request} />
        )
      })}
    </div>
    </div>
  );
}

export default App;
