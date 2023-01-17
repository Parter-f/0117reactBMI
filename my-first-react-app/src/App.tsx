import React , { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { type } from '@testing-library/user-event/dist/type';

interface State {

  weight : number;
  height : number;
  bmi_ertek : number;

}


class App extends Component<{} , State>{

  constructor(props: {}) {
    super(props);
    this.state = {
      weight : 0,
      height : 0,
      bmi_ertek : 0,

    }
    }
    

  render(){

    return <div> 
      Írja be a súlyát: 
      <input type="number" id='weight'onChange={(e) => { this.setState({ weight: parseInt(e.currentTarget.value) })} } />
      <label htmlFor="weight">kg</label>
      <br />
      Írja be a Magasságot:  
      <input type="number" id='height'onChange={(e) => { this.setState({ height: parseInt(e.currentTarget.value) })} } />
      <label htmlFor="height">cm</label>
      <p id='eredmenybox'></p>
      
      <br />
      <button onClick={ () => {
        const weight1 = this.state.weight;
        const height1 = this.state.height;     
        this.setState({bmi_ertek : weight1 / (height1/100) **2})
        
        
      }}>Kiszámítás</button>
      <br />

      <div>
        Az ön bmi értéke: {this.state.bmi_ertek.toFixed(2)}
      </div>
    
     <table className='table'>
            <tr className='tabla'>
                <th className='text-center sovany'>18,5 vagy kevesebb</th>
                <td className='sovany'>SOVÁNY</td>
            </tr>
            <tr>
                <th className='text-center normal'>18,5 - 24,9</th>
                <td className='normal'>NORMÁL</td>
            </tr>
            <tr>
                <th className='text-center tulsuly'>25 - 29,9</th>
                <td className='tulsuly'>TÚLSÚLY</td>
            </tr>
            <tr>
                <th className='text-center elsotulsuly'>30 - 34,9</th>
                <td className='elsotulsuly'>I. FOKÚ ELHÍZÁS</td>
            </tr>
            <tr>
                <th className='text-center masodiktulsulyŰ'>35 - 39,9</th>
                <td className='masodiktulsuly'>II. FOKÚ ELHÍZÁS</td>
            </tr>
            <tr>
                <th className='text-center harmadiktulsuly'>40 vagy több</th>
                <td className='harmadiktulsuly'>III. FOKÚ ELHÍZÁS</td>
            </tr>
        </table>

        <div className='row'>
            <h1 id="index1">AZ IDEÁLIS TESTTÖMEGE: <span id="idealisErtek">0</span></h1>
            
        </div>

        <table className='table'>
            <tr>
                <th className='text-center' id="szelso_adat"><span id="szelsoErtek">0</span></th>
                <td id="szelso"> Kivánatos szélső értékek</td>
            </tr>
        </table>
      </div>
    
  }

}

export default App;
