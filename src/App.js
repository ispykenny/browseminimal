import Nav from "./Components/Nav";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './Pages/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav/>
        <div className="shimmy"></div>
        <Switch>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
