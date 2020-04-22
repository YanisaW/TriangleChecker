import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//import { SketchPicker } from 'react-color';
import { Helmet } from 'react-helmet';
import './fonts/LemonMilkMedium-mLZYV.otf'

const initialState = {
  side_1: "",
  side_2: "",
  side_3: "",
  result: "",
  err1: "",
  err2: "",
  err3: "",
  field: {}
}



export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = initialState;

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  
  handleChange(e){
    this.setState( { [e.target.name] : e.target.value} )
  }

  handleChangeComplete = (color) => {
    this.setState({ background: color.hex });
  };

  Validation = () => {
    let err1 =  "";
    let err2 =  "";
    let err3 =  "";
    let field = this.state.field; 
   


    if(!this.state.side_1){
     
      err1 = 'cannot be empty!';
    }
    if(this.state.side_1 !== ""){
      if(this.state.side_1 <= 0){
       
        err1 = 'cannot be negative or zero';
      }
      if(this.state.side_1 > 100){
        err1 = 'out of bound. max number is 100';
      }
    }

    if(!this.state.side_2){
      err2 = 'cannot be empty!';
    }
    if(this.state.side_2 !== ""){
      if(this.state.side_2 <= 0){
       
        err2 = 'cannot be negative or zero';
      }
      if(this.state.side_2 > 100){
        err2 = 'out of bound. max number is 100';
      }
    }

    if(!this.state.side_3){
      err3 = 'cannot be empty!';
    }
    if(this.state.side_3 !== ""){
      if(this.state.side_3 <= 0){
       
        err3 = 'cannot be negative or zero';
      }
      if(this.state.side_3 > 100){
        err3 = 'out of bound. max number is 100';
      }
    }

    if(err1||err2||err3){
      this.setState({err1});
      this.setState({err2});
      this.setState({err3});
      return false;
    }

    return true;
  };

  resetForm = () =>{
    
    this.setState(initialState);
  }
  
  handleClick(event) {
    event.preventDefault();
    const isValid = this.Validation();
    var a = eval(this.state.side_1 * this.state.side_1)
    var b = eval(this.state.side_2 * this.state.side_2)
    var c = eval(this.state.side_3 * this.state.side_3)
    
    if(isValid){
     
      if((eval((this.state.side_1*1) + (this.state.side_2*1)) < (this.state.side_3*1))
        || (eval((this.state.side_2*1) + (this.state.side_3*1)) < (this.state.side_1*1))
        || (eval((this.state.side_1*1) + (this.state.side_3*1)) < (this.state.side_2*1))){
          this.setState({result: "[ Not a Triangle | เป็นสามเหลี่ยมไม่ได้ ]"})
        }

        else if((this.state.side_1 === this.state.side_2) && (this.state.side_2 === this.state.side_3)){
          this.setState({result: "[ Equilateral Triangle | สามเหลี่ยมด้านเท่า ]"})
        }
   
        else if(((this.state.side_1 === this.state.side_2) && (this.state.side_1 !== this.state.side_3)) 
        || ((this.state.side_2 === this.state.side_3) && (this.state.side_2 !== this.state.side_1))
        || ((this.state.side_1 === this.state.side_3) && (this.state.side_1 !== this.state.side_2))){
          this.setState({result: "[ Isosceles Triangle | สามเหลี่ยมหน้าจั่ว]"})
        }
   
        else if((a === eval(b+c)) || (b === eval(a+c)) || (c === eval(a+b))){
          this.setState({result: "[ Right Triangle | สามเหลี่ยมุมฉาก ]"})
        }
  

        else if((this.state.side_1 !== this.state.side_2) && (this.state.side_2 !== this.state.side_3) && (this.state.side_1 !== this.state.side_3) ){
        this.setState({result: "[ Scalene Triangle | สามเหลี่ยมด้านไม่เท่า]"})
        }
  
    }
    
  
    
    

    event.preventDefault();
  }

  
  render() {
    
    return (
      
      

      <div className="App">

        <Helmet>
          <title>Three Angle</title>
        </Helmet>
        
        <br></br>
        <text style={{fontSize:50,color: "#FFFAE9",fontWeight:1000}}>Three Angle</text>
        <br></br>
        <text style= {{fontSize : 28}}>Enter the length of sides</text>
        <br></br>--ensure that your fill the number again after you clicked reset button--
        <form ref={form => this.foem = form}>

          <label >
            <br></br>
            <t>Side1   : </t> 
            <input 
            type = "number" 
            name = "side_1"
            placeholder="Enter Number" 
            required
            value= {this.state.side_1}
            onChange={this.handleChange} /> 
            <div style={{fontSize: 15,color:'red'}}>{this.state.err1}</div>
          </label>
          
          

          <label>
            <br></br>
            <t>Side2   : </t> 
            <input 
            type = "number" 
            name = "side_2"
            placeholder="Enter Number" 
            required
            value={this.state.side_2} 
            onChange={this.handleChange} /> 
            <div style={{fontSize: 15,color:'red'}}>{this.state.err2}</div>
          </label>

         
         
          <label>
            <br></br>
            <t>Side3   : </t> 
            <input 
              type="number" 
              name = "side_3"
              placeholder="Enter Number" 
              required
              value= {this.state.side_3} 
              onChange={this.handleChange} /> 
            <div style={{fontSize: 15,color:'red'}}>{this.state.err3}</div>
          </label>

          <br></br>

          <button id = "calculate" type = "button" onClick = {this.handleClick} className = "App"> Calculate </button>
          <button id = "clear" type = "button" onClick = {this.resetForm;} className = "App"> Reset</button>

        </form>
        <label>
            <br></br>
            <t>Result   : </t><br></br> 
            
           <label style= {{fontSize: 40,color: "#FFFAE9"}}>{this.state.result}</label>
        </label>

      

      </div>

      
      
    );
  }
}
