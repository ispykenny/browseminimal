import React from 'react';
import Inner from './Inner';


const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div>
      <Inner className="center">
        <div className="default-block" style={{marginTop: 30}}>
          Browse Minimal {year}
        </div>
      </Inner>
    </div>
  )
}

export default Footer;