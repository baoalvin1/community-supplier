import React, { Component } from 'react';


const url="https://api.covid19api.com/summary"

export default class Tracking extends Component{


constructor(){
super()
this.state={Global:{},Countries:{}}

}    
async componentDidMount(){

const response=await fetch(url)
const content=await response.json()
this.setState({Global: content.Global,Countries:content.Countries})

}


render(){
const{ NewConfirmed,TotalConfirmed,NewDeaths,TotalDeaths,NewRecovered,TotalRecovered}=this.state.Global
 
return(
 <>   
  
<div style={{display:"flex",flexDirection:"row",textAlign:"center",marginTop:"3vh",marginLeft:"15%"}}>
  
 <div style={{display:"flex",flexDirection:"column "}}  > 
<span className="headline"> New Confirmed Cases    </span>
<span className="stat"> {NewConfirmed}  </span>
</div>
<div style={{display:"flex",flexDirection:"column"}}  >
<span className="headline" >  Total Cases </span>
<span className="stat" >  {TotalConfirmed} </span>
</div>
<div style={{display:"flex",flexDirection:"column"}}  >
<span className="headline" >New Deaths </span>
<span className="stat" > {NewDeaths}  </span>
</div>
<div style={{display:"flex",flexDirection:"column"}}  >
<span className="headline" >Total Deaths </span>
<span className="stat" >{TotalDeaths} </span>
</div>

<div style={{display:"flex",flexDirection:"column"}}  >

<span className="headline"  > New Recovered Cases  </span>
<span className="stat"  > {NewConfirmed}  </span>
</div>
<div style={{display:"flex",flexDirection:"column"}}  >

<span className="headline" >Total  Recovered Cases </span>
<span className="stat" >{TotalConfirmed} </span>
</div>

</div>
</>
);
}
}