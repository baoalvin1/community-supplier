import React,{Component} from 'react' 
import logo from "../ribbon.svg"
export default class Login extends Component{




render (){
return(
  <div className="Navbar">

      <img
        alt=""
        src={logo}
        className="Ribbon"
        width="30"
        height="30"
      />{' '}
      
      <span>Community Helper</span>
      
</div>
)
}

}