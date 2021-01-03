import React from 'react';
import Inner from './Inner';

const Nav = () => {
  return (
    <header>
      <Inner className='nav-section'>
        <div className="nav-section__item">
          <a href="./" id="site-title">
            <span className="sr-only">Home Page of Browse Mininal</span>
            <div>
              <strong>BM.</strong>
            </div>
          </a>
          <button className="menu-trigger">
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
              <li><a className="<?php echo $about;?>" href="<?php echo site_url('/about');?>">Reviews</a></li>
              <li><a className="<?php echo $about;?>" href="<?php echo site_url('/about');?>">Hers</a></li>
              <li><a className="<?php echo $articles;?>" href="<?php echo site_url('/articles');?>">His</a></li>
              <li><a className="<?php echo $work;?>" href="<?php echo site_url('/work');?>">Contact</a></li>
            </ul>
          </nav>
        </div>
      </Inner>
    </header>
  )
}

export default Nav;