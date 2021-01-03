import React from 'react';
import Collection from '../Components/Collection';
import Inner from '../Components/Inner';

const Home = () => {
  return (
    <> 
      <Inner>
        <h1>Welcome to Browse Minimal.</h1>
        <p>Home of the cleanest and most simplfied, yet epic products.</p>
      </Inner>

      <Collection/>
    </>
  )
}

export default Home;