import React, { Component } from 'react';




export default class Form extends Component{

constructor(){

super()
this.state={}

}




    submit(event){
event.preventDefault();

/*const response=  await fetch('http://localhost:5000',{method:'POST',headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },body: JSON.stringify(data)})
  const content=await response.json();
*/
    }


render(){
return(
 < >  <div >
 <form>
   
   <input type="Name" className="NameEntry"placeholder="Health Provider Name" name="name"/>
   <input type="address" className="AddressEntry" placeholder="Address"  name="address"/>
   <input type="number" className="NumberEntry" placeholder="Amount"  name="amount"/>
   <input type="text" className="AddressEntry" placeholder="Name of Supply"  name="type"/>
   
   </form>
   <button className='submit' onClick={(e)=>{this.submit(e)}} >Submit</button>
   
  </div></>
);
}
}