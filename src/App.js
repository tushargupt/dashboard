import logo from './logo.svg';
import './App.css';
import Dashboard from './components/dashboard'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
        <Switch>
          <Route exact path='/' component={Dashboard}/>
          </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
