import React,{ Component } from "react";
export default class WhichKey extends Component{
  state={
    keyname:null
  }

  odClick=(event)=>{
this.setState({keyname:event.key})
  }
  componentDidMount(){
    window.addEventListener("keypress",this.odClick)
  }
  
  render(){
    return(
    <main>Last pressed key: {this.state.keyname}</main>
    )
  }
}