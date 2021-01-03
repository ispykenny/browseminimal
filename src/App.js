import Nav from "./Components/Nav";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './Pages/Home';
import Footer from "./Components/Footer";
import { Helmet, HelmetProvider } from 'react-helmet-async';

function App() {
  return (
    <div className="App">
      <HelmetProvider>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Welcome To Browse Minimal.</title>
        <link rel="canonical" href="https://browseminimal.com" />
        <meta name="description" content="Browse Minimal is a collection of all minimal and minimalistic products from Amazon." />
      </Helmet>
      </HelmetProvider>
      <Router>
        <Nav/>
        <div className="shimmy"></div>
          <Switch>
            <Route path="/">
              <Home/>
            </Route>
          </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
