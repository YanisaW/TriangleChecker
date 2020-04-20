import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { SketchPicker } from 'react-color';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      side_1: 0,
      side_2: 0,
      side_3: 0,
      result: "",
     
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e){
    this.setState( { [e.target.name] : e.target.value} )
  }

  handleChangeComplete = (color) => {
    this.setState({ background: color.hex });
  };

  
  handleClick(event) {
    var a = eval(this.state.side_1 * this.state.side_1)
    var b = eval(this.state.side_2 * this.state.side_2)
    var c = eval(this.state.side_3 * this.state.side_3)
  
    if((eval((this.state.side_1*1) + (this.state.side_2*1)) < (this.state.side_3*1))
    || (eval((this.state.side_2*1) + (this.state.side_3*1)) < (this.state.side_1*1))
    || (eval((this.state.side_1*1) + (this.state.side_3*1)) < (this.state.side_2*1))){
      this.setState({result: "Not a Triangle"})
    }

    else if((this.state.side_1 == this.state.side_2) && (this.state.side_2 == this.state.side_3)){
        this.setState({result: "Equilateral Triangle"})
    }
   
    else if(((this.state.side_1 == this.state.side_2) && (this.state.side_1 != this.state.side_3)) 
       || ((this.state.side_2 == this.state.side_3) && (this.state.side_2 != this.state.side_1))
       || ((this.state.side_1 == this.state.side_3) && (this.state.side_1 != this.state.side_2))){
         this.setState({result: "Isosceles Triangle"})
   }
   
    else if((a == eval(b+c)) || (b == eval(a+c)) || (c == eval(a+b))){
         this.setState({result: "Right Triangle"})
    }
  

    else if((this.state.side_1 != this.state.side_2) && (this.state.side_2 != this.state.side_3) && (this.state.side_1 != this.state.side_3) ){
      this.setState({result: "Scalene Triangle"})}
    
  
    event.preventDefault();
  }

  
  render() {
    
    return (
      
     

      <div className="App">
        
        <br></br> <br></br>
        <h1>Three Angle</h1>
        <text style= {{fontSize : 20}}>Enter the length of sides</text>
        <form onSubmit={this.handleSubmit}>

          <label>
            <br></br>
            <t>Side1   : </t> 
            <input 
            type ="number" 
            name = "side_1"
            side_1 ={this.state.side_1}
            onChange={this.handleChange} /> 
          </label>
          
          <br></br>

          <label>
            <br></br>
            <t>Side2   : </t> 
            <input 
            type = "number" 
            name = "side_2"
            side_2 ={this.state.side_2} 
            onChange={this.handleChange} /> 
          </label>

          <br></br>

          <label>
            <br></br>
            <t>Side3   : </t> 
            <input 
              type="number" 
              name = "side_3"
              side_3 ={this.state.side_3} 
              onChange={this.handleChange} /> 
          </label>

          <br></br><br></br>

          <button type = "button" onClick = {this.handleClick} className = "App"> Calculate </button>
        </form>
        <label>
            <br></br>
            <t>Result   : </t> 
            {this.state.result}
        </label>

      

      </div>

      
      
    );
  }
}