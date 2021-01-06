import React, {useEffect} from 'react';
import Inner from './Inner';
import Cards from './Cards';
import fetcher from '../Utils/fetcher'

const Collection = ({filter, listing, setListing}) => {

  useEffect( () => {
    const collectListings = async () => {
      let theData = await fetcher('/.netlify/functions/endpoint?type=all');
      setListing(theData);
    }
    collectListings();
  },[setListing])


  const Listing = () => {
    if(listing) {
      if(listing.status === 200) {
        
        if(filter === "All") {
          return <Cards root={listing.data.items}/>
        } else {
          const root = listing.data.items;
          const filteredData = [];

          root.forEach((cat) => {
            if(filter === cat.fields.category) {
              filteredData.push(cat)
            }
          })

          return <Cards root={filteredData}/>
        }
      } else {
        return <div>goodbye</div>
      }
    } else {
      return <div>Loading...</div>
    }
  }

  return (
    <div>
      <Inner>
        <Listing/>
      </Inner>
    </div>
  )
}

export default Collection;