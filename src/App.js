import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home';
import Message from './Pages/Message';
import Form from './Pages/Form';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/message' component={Message} />
          <Route exact path='/form' component={Form} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
