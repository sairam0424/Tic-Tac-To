import logo from "./logo.svg";
import "./App.css";
import './styles.css'
import Square from "./components/Square";
import Board from "./components/Board";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Square /> */}

        <Board/>
      </header>
    </div>
  );
}

export default App;
