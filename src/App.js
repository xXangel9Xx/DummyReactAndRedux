import logo from './logo.svg';
import './App.scss';
import Index from './pages/index/index'
import {BrowserRouter,Switch,Route,Redirect} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/Index" component={Index} />
          <Redirect from="/" to="/Index"/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
/*
 <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */