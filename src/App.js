import logo from './logo.svg';
import './App.scss';
import Index from './pages/index/index'
import {BrowserRouter,Switch,Route,Redirect} from 'react-router-dom'
import Show from './pages/show/show';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/Index" component={Index} />
          <Route path="/User/:id" component={Show} />
          <Redirect from="/" to="/Index"/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
