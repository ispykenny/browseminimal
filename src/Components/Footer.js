import React from 'react';
import Inner from './Inner';


const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div>
      <Inner className="center">
        <div style={{marginTop: 30, marginBottom: 50}}>
          <div className="default-block">
            Browse Minimal {year}
          </div>
          <small><a className="footer-link" href="mailto:browseminimal@gmail.com" target="_blank" rel="noreferrer">Get in touch</a></small>
        </div>
      </Inner>
    </div>
  )
}

export default Footer;