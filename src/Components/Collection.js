import React, {useState, useEffect} from 'react';
import Inner from './Inner';
import Cards from './Cards';
import Filter from './Filter';
import fetcher from '../Utils/fetcher';

const Collection = () => {
  const [listing, setListing] = useState();
  const [filter, setFilter] = useState('all');

  useEffect( () => {
    const collectListings = async () => {
      let theData = await fetcher('/.netlify/functions/endpoint?type=all');
      setListing(theData);
    }
    collectListings();
    
  },[])

  const Listing = () => {
    if(listing) {
      if(listing.status === 200) {
        console.log('here in', filter)
        let root = listing.data.items;
        if(filter.toLowerCase() === "all") {
          return <Cards root={root}/>
        } else {
          let filteredRoot = []
          root.forEach((item) => {
            if(item.fields.category === filter) {
              filteredRoot.push(item)
            }
          })
          return <Cards root={filteredRoot}/>
        }
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
        <Filter
          listing={listing}
          setFilter={setFilter}
          filter={filter}
          />
          <div>
            {filter.toLowerCase() === "all" ? (
              <p>View All Products</p>
            ) : (
              <p>View Products in <strong>{filter}</strong></p>
            )} 
          </div>
        <Listing/>
      </Inner>
    </>
  )
}

export default Collection;