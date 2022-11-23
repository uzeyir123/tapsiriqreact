import React,{Component} from "react";
class Button extends Component {
    clickHandler = (event) => {
      console.log('Button click!');
    };
   
    render() {
      return (
        <button type="button" onClick={this.clickHandler}>
           ADD
        </button>
      );
    }
   }
   export default Button