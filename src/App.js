import logo from './logo.svg';
import './App.scss';
import {BrowserRouter,Switch,Route,Redirect} from 'react-router-dom'
import Index from './pages/index/index'
import Show from './pages/show/show';
import CommentsPots from './pages/commentsPots/commentsPots'
import Nav from './components/nav/nav';
function App() {
  return (
    <div className="App">
      <Nav />
      <BrowserRouter>
        <Switch>
          <Route path="/Index" component={Index} />
          <Route path="/User/:id/Comments/:id" component={CommentsPots} />          
          <Route path="/User/:id" component={Show} />
          <Redirect from="/" to="/Index"/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
