import './App.css';

import Conversor from "./components/Conversor"

function App() {
  return (
    <div className="App">
      <div className="aplicativo">

        <h1>Conversor de moedas</h1>
        <div className="linha">
          <div className="bandeira">
            <div className="euaTobr">
              <div className="mask">
                <div className="texto_conversor">
                <Conversor moedaA="USD" moedaB="BRL"></Conversor>      
                </div>
              </div>
            </div>
          </div>
          <div className="bandeira">
            <div className="brToeua">
              <div className="mask">
                <div className="texto_conversor">
                  <Conversor moedaA="BRL" moedaB="USD"></Conversor>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="linha">
          <div className="bandeira">
            <div className="cadTobr">
              <div className="mask">
                <div className="texto_conversor">
                  <Conversor moedaA="CAD" moedaB="BRL"></Conversor>
                </div>
              </div>
            </div>
          </div>
          <div className="bandeira">
            <div className="brTocad">
              <div className="mask">
                <div className="texto_conversor">
                  <Conversor moedaA="BRL" moedaB="CAD"></Conversor>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="linha">
          <div className="bandeira">
            <div className="eurTobr">
              <div className="mask">
                <div className="texto_conversor">
                  <Conversor moedaA="EUR" moedaB="BRL"></Conversor>
                </div>
              </div>
            </div>
          </div>
          <div className="bandeira">
            <div className="brToeur">
              <div className="mask">
                <div className="texto_conversor">
                  <Conversor moedaA="BRL" moedaB="EUR"></Conversor>
                </div>
              </div>
            </div>
          </div>
        </div>
          
      </div>
    </div>
  );
}

export default App;
