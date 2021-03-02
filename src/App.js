import './App.css';

import Conversor from "./components/Conversor"

function App() {
  return (
    <div className="App">
      <div className="aplicativo">

        <h1>Conversor de moedas</h1>
        <div className="linha">
          <div className="euaTobr">
            <Conversor moedaA="USD" moedaB="BRL"></Conversor>      
          </div>
          <div className="brToeua">
            <Conversor moedaA="BRL" moedaB="USD"></Conversor>
          </div>
        </div>
        <div className="linha">
          <div className="cadTobr">
            <Conversor moedaA="CAD" moedaB="BRL"></Conversor>
          </div>
          <div className="brTocad">
            <Conversor moedaA="BRL" moedaB="CAD"></Conversor>
          </div>
        </div>
        <div className="linha">
          <div className="eurTobr">
            <Conversor moedaA="EUR" moedaB="BRL"></Conversor>
          </div>
          <div className="brToeur">
            <Conversor moedaA="BRL" moedaB="EUR"></Conversor>
          </div>
        </div>
          
      </div>
    </div>
  );
}

export default App;
