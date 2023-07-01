import './App.css';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      btn:["AC", "/", "7", "8", "9", "x", "4", "5", "6", "-", "1", "2", "3", "+", "0", ".", "="]
    };
  }

  render() {

    return (
      <div className="App w-100 p-3">
        <div className='calculator container-fluid border border-5 border-black p-0'>
          <div className="row row-cols-4 w-100 m-0 border border-black">
            <div className='col-12 '>sc1</div>
            <div className='col-12'>sc</div>
            
              {
                this.state.btn.map((value, indx) =>(
                  <button key={indx} className={`col button btn btn-outline-secondary ${value === 'AC' ? 'col-9 btn-outline-danger' : value === '=' ? 'col-6 btn btn-outline-info' : ''}`}>{value}</button>
                ))
              }
          </div>
        </div>
        <div className='h-25 w-100 mt-4' style={{backgroundColor: 'cyan'}}>
          <p>Rp</p>
        </div>
      </div>
    );
  }
}

export default App;
