import React,{ Component } from "react";
import "./style.css"
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
let clas="";
const {keyname}=this.state
if(keyname==1){
  clas="rp"
}
else if(keyname==2){
  clas="palet"
}

    return(
    <main className={clas}>Last pressed key: {keyname}</main>
    )
  }
}