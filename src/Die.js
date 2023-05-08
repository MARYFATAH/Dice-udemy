import { Component } from "react";
class Die extends Component{
    render() {
        return (
           <i className={`fas fa-2xl fa-dice-${this.props.face} ${this.props.rolling? 'shake':""}`}></i>
        )
    }
}
export default Die;
