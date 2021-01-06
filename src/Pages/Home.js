import React, {useState, useCallback} from 'react';
import Collection from '../Components/Collection';
import Inner from '../Components/Inner';
import Filter from '../Components/Filter'

const Home = () => {
  const [listing, setListing] = useState();
  const [filter, setFilter] = useState('All');

  const changeFilter = useCallback((event) => {
    setFilter(filter => event.target.value)
  },[setFilter])

  const Viewing = () => {
    if(filter === "All") {
      return (
        <div>
          <h2>You're viewing all products</h2>
        </div>
      )
    } else {
      return (
        <div>
          <h2>You're Viewing all products in {filter}</h2>
        </div>
      )
    }
  }
  
  return (
    <> 
      <Inner className="center">
        <h1>Welcome to Browse Minimal.</h1>
        <p>A collection of minimal products from Amazon.</p>
      </Inner>

      <Inner className="filter">
        <Viewing />
        <Filter
          listing={listing}
          changeFilter={changeFilter}
        />
      </Inner>
      <Collection 
        listing={listing}
        filter={filter}
        setListing={setListing}
      />
    </>
  )
}
export default Home;