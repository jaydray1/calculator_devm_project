import React, { Component } from 'react';
import calculatorImg from '/Users/jmjd/DevMtn/react_redux/devm_projects/calculator_devm_project/src/calculator.png'

// JavaScript is technically class-less, it inherits properties from objects, not classes
// JS mimics classes here with 'class' syntax, but it is really an object that utilizes
// prototypal inheritance and the prototype chain in order to access properties on the 
// Calculator class(object)

class Calculator extends Component {
    // the constructor method creates and initializes and object inside of 
    // a class. 
    constructor() {

        // we use the super keyword and method to call the constructor of a parent class
        // this gives us access to the properties of the parent class. It MUST 
        // be used BEFORE the 'this' keyword
        super();
        this.state = {
            header: "Calculator",
            display: '0',
            operator: '',
            temp: 0,
            resetDisplay: true
        }
    }
    // these are all methods on a class - remember the class is really an object and
    // these methods are key: property pairs on the class object
            updateHeader(val) {
                // technically don't need the 'return' word, but I like it,
                // it reminds me that I am returning some value, which in this 
                // case, a 'new' state
                return this.setState({header: val})
            }
            setDisplay(num) {
                // these are ternary statements. (if) 'something' ? (then)(return) num : (else)(return) this.state.display + num
                var display = ( this.state.display === '0' ) ? num : this.state.display + num;
                return this.setState({display: (this.state.display.length < 13) ? display : this.state.display })
            }
            setOperator(operator) {
                if(!this.state.operator) {
                    // the parseInt function parses a string and returns an integer;
                    // the 10 is the 'radix parameter' which is used to specify which 
                    // numeral system...to use.
                    return this.setState({ operator: operator, temp: parseInt(this.state.display, 10), display: '0'});
                }
            }
            calculate() {
                if(this.state.operator === '') {
                    return;
                }
                // common practice when declaring variables is to immediately give them a value,
                // this makes them valid - there are instances like this where we don't have a value
                // to assign to it quite it, we will be assigning values to it as we move 
                // through our switch statement - we use var, not const, because it will change 
                // with every click; we don't use let so that we can access it from anywhere in the 
                // switch statement 
                var result;

                switch(this.state.operator) {
                    case '+':
                    result = this.state.temp + parseInt(this.state.display, 10);
                    break;
                    case '-':
                    result = this.state.temp - parseInt(this.state.display, 10);
                    break;
                    case '*':
                    result = this.state.temp * parseInt(this.state.display, 10);
                    break;
                    case '/':
                    result = this.state.temp / parseInt(this.state.display, 10);
                    break;
                    // always include a default case at the end of a switch statement 
                    default:
                    break;
                }
                this.setState({display: String(result), resetDisplay: true})
            }
            clearDisplay() {
                return this.setState({display: '0', operator: '', temp: 0, resetDisplay: true})
            }
  render() {
    return (
      <div id="calculator-container">
        <input id="header-input" onChange={ (e) => {this.updateHeader(e.target.value); }} />
        <h1 id="header"> { this.state.header } </h1>
        <img className="remove-highlight" src={calculatorImg} alt="calculator" />
        <div id="calculator-mask" className="remove-highlight">
          <div className="output">
            <span className="total"> {this.state.display} </span>
          </div>

          <div className="btn clear" onClick={ () => { this.clearDisplay(); }} ></div>

          <div className="btn zero" onClick={() => {this.setDisplay('0'); }} ></div>
          <div className="btn one" onClick={() => {this.setDisplay('1'); }} ></div>
          <div className="btn two" onClick={() => {this.setDisplay('2'); }} ></div>
          <div className="btn three" onClick={() => {this.setDisplay('3'); }} ></div>
          <div className="btn four" onClick={() => {this.setDisplay('4'); }} ></div>
          <div className="btn five" onClick={() => {this.setDisplay('5'); }} ></div>
          <div className="btn six" onClick={() => {this.setDisplay('6'); }} ></div>
          <div className="btn seven" onClick={() => {this.setDisplay('7'); }} ></div>
          <div className="btn eight" onClick={() => {this.setDisplay('8'); }} ></div>
          <div className="btn nine" onClick={() => {this.setDisplay('9'); }} ></div>

          <div className="btn equal" onClick={() => { this.calculate()}} ></div>
          <div className="btn multiply" onClick={ () => { this.setOperator('*')}} ></div>
          <div className="btn divide" onClick={() => { this.setOperator('/')}} ></div>
          <div className="btn subtract" onClick={() => { this.setOperator('-')}} ></div>
          <div className="btn add" onClick={() => {this.setOperator('+')}} ></div>
        </div>
      </div>
    )
  }
}

// always remember to export your component so you can call it from other 
// modules/components
export default Calculator;