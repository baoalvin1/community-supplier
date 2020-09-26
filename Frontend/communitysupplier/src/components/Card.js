import React,{Component} from 'react' 
import genericimage from "../hospital.svg"
export default class Login extends Component{


constructor(){


}


componentDidMount(){



}
//hospital name,number ,type,
render (){
return(
  <div className="Card">

      <img
        alt=""
        src={this.props.image?this.props.image : genericimage}
        width="70"
        height="30"
      />{' '}
      
      <span>{this.props.name}</span>
      <span>{this.props.amount}</span>
      <span>{this.props.types}</span>
      
</div>
)
}

}