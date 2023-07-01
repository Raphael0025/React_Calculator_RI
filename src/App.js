import './App.css';
import React from 'react';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      btn: ["AC", "/", "7", "8", "9", "*", "4", "5", "6", "-", "1", "2", "3", "+", "0", ".", "="],
      output: '0',
      formula: '',
    };
    this.handleFormula = this.handleFormula.bind(this);
  }

  handleFormula(value) {
    if(value === 'AC'){
      this.setState({
        output: 0,
        formula: '',
      })
    } else if (value === '='){
      try{
        const result = eval(this.state.formula)
        this.setState({
          output: result,
          formula: this.state.formula + ' = ' + result,
        })
      }catch(error){
        this.setState({
          output: 'Error',
          formula: '',
        })
      }
    } else if (['/', '*', '-', '+'].includes(value)){
      if(this.state.formula.includes('=')){
        this.setState({
          formula: this.state.output + value,
        })
      } else {
        this.setState((prevState) => ({
          output: value,
          formula: prevState.formula + value,
        }))
      }
    } else {
      this.setState((prevState) => ({
        output: value,
        formula: prevState.output === '0' ? value : prevState.formula + value,
      }))
    } 
  }
  
  render() {
    return (
      <div className="App w-100 p-3">
        <div className='calculator container-fluid border border-5 border-black p-0'>
          <div className="row row-cols-4 w-100 m-0 border border-black">
            <div className='col-12 formulaSc'>{this.state.formula}</div>
            <div className='col-12 outputSc'>{this.state.output}</div>
            {this.state.btn.map((value, indx) => (
              <button key={indx} className={`col button btn btn-outline-secondary ${value === 'AC' ? 'col-9 btn-outline-danger' : value === '=' ? 'col-6 btn btn-outline-info' : '' }`} onClick={() => this.handleFormula(value)}>
                {value === '*' ? 'x' : value}
              </button>
            ))}
          </div>
        </div>
        <div className='h-25 w-100 mt-4 auth'>
              Designed and Coded By<br />
          <a id='dev' href='https://github.com/Raphael0025' rel="noopener noreferrer" target='_blank'>Rp Isla</a>
        </div>
      </div>
    );
  }
}

export default App;
