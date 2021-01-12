import React from 'react';
import { Link } from 'react-router-dom';
import Inner from './Inner';

const Nav = ({navShowing, setNavShowing}) => {
  return (
    <header className={navShowing ? `nav-showing` : ''}>
      <Inner className='nav-section'>
        <div className="nav-section__item">
          <Link to="/" id="site-title" onClick={() => setNavShowing(false)}>
            <span className="sr-only">Home Page of Browse Mininal</span>
            <div>
              <strong>BM.</strong>
            </div>
          </Link>
          <button className="menu-trigger" onClick={() => setNavShowing(!navShowing)}>
            <span className="sr-only">Menu</span>
            <div className="menu-trigger__span">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
        </div>
        <div className="nav-section__item main-nav-parent">
          <nav className="main-nav">
            <ul>
              <li><Link to="/articles" onClick={() => setNavShowing(false)}>Articles</Link></li>
            </ul>
          </nav>
        </div>
      </Inner>
    </header>
  )
}

export default Nav;