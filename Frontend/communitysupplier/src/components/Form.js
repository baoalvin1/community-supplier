import React, { Component } from 'react';




export default class Form extends Component{

constructor(){

super()
this.state={
  hospitalName:"",
  itemType:"",
  quantityAsked:"",
  address:""
}

}




    async submit(event){
const url =  "https://communitysupplier.uc.r.appspot.com/"
event.preventDefault();
const response =  await fetch(url,{method:'POST',headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },body: JSON.stringify(this.state)})
  const content=await response.json();

    }


render(){
return(
 < >  <div >
 <form>
   
   <input type="Name" className="NameEntry"placeholder="Health Provider Name" onChange={(e)=>{this.setState({hospitalName:e.target.value})}} name="name"/>
   <input type="address" className="AddressEntry" placeholder="Address" onChange={(e)=>{this.setState({address:e.target.value})}}  name="address"/>
   <input type="number" className="NumberEntry" placeholder="Amount" onChange={(e)=>{this.setState({quantityAsked:e.target.value})}}   name="amount"/>
   <input type="text" className="AddressEntry" placeholder="Name of Supply"  onChange={(e)=>{this.setState({itemType:e.target.value})}}   name="type"/>
   
   </form>
   <button className='submit' onClick={(e)=>{this.submit(e)}} >Submit</button>
   
  </div></>
);
}
}