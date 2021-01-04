import React from 'react';
import Collection from '../Components/Collection';
import Inner from '../Components/Inner';


const Home = () => {

  return (
    <> 
      <Inner className="center">
        <h1>Welcome to Browse Minimal.</h1>
        <p>A collection of minimal products from Amazon.</p>
      </Inner>
      <Collection/>
    </>
  )
}

export default Home;