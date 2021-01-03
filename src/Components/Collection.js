import React, {useState, useEffect} from 'react';
import Inner from './Inner';
import fetcher from '../Utils/fetcher';
import Cards from './Cards';

const Collection = () => {
  const [listing, setListing] = useState();

  useEffect( () => {
    const collectListings = async () => {
      let theData = await fetcher('/.netlify/functions/endpoint?type=all');
      setListing(theData);
    }
    collectListings();
    
  },[])

  const Collection = () => {
    if(listing) {
      if(listing.status === 200) {
        let root = listing.data.items;
        console.log(root)
        return <Cards root={root}/>
      } else {
        return <div>goodbye</div>
      }
    } else {
      return <div>Loading...</div>
    }
  }

  return (
    <>
      <Inner>
        <Collection/>
        
      </Inner>
    </>
  )
}

export default Collection;