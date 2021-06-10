// import logo from './logo.svg';
// import './App.css';
import { Route, Link } from "react-router-dom";
import Home from '../Home/Home'
import About from '../About/About'

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div>
      <header>
        <Link to="/">Home</Link>&nbsp;
        <Link to="/about">About</Link>
      </header>

      <main>
        <Route exact path="/" component={Home}/>
        <Route exact path="/about" component={About}/>
      </main>
    </div>
  );
}

export default App;
