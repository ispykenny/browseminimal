import React, {useState, useEffect} from 'react';
import Inner from './Inner';
import fetcher from '../Utils/fetcher';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

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
        return (
          <div className="collection">
            { root.map((item, index) => (
              <div key={index} className="collection__item">
                  <a href="" className="collection__imagelink">
                    <div className="collection__image">
                      <img src={`https:${item.fields.featuredImage.fields.file.url}`}/>
                    </div> 
                  </a>
                <div className="collection__info">
                  <div className="collection__title">
                    <h3>{item.fields.title}</h3>
                  </div>
                  <div className="collection__summary">
                    {documentToReactComponents(item.fields.productInfo)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )
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