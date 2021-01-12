import {useState, useEffect} from 'react'
import Nav from "./Components/Nav";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './Pages/Home';
import Footer from "./Components/Footer";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Article from "./Pages/Article";
import Blogs from "./Pages/Blog";
import fetcher from './Utils/fetcher'

function App() {
  const [articles, setArticles] = useState();
  const [mounted, setMount] = useState(false);
  const [navShowing, setNavShowing] = useState(false);

  useEffect( () => {
    const collectListings = async () => {
      let theData = await fetcher('/.netlify/functions/endpoint?type=articles');
      setArticles(theData);
      setMount(true)
    }
    collectListings();
  },[])

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
        <Nav navShowing={navShowing} setNavShowing={setNavShowing}/>
        <div className="shimmy"></div>
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route exact path="/articles/" render={(props) => <Blogs setArticles={setArticles} articles={articles} mounted={mounted} setNavShowing={setNavShowing}/>}/>
            <Route path="/articles/:slug" render={(props) => <Article article={props} read={articles} mounted={mounted} setNavShowing={setNavShowing}/>}/>
          </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
