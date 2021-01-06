import React from 'react';
import LazyLoad from 'react-lazy-load';

const Cards = ({root}) => {
  return (
    <div className="collection">
      { root.map((item, index) => (
        <div key={index} className="collection__item">
            <a 
              className="collection__imagelink"
              href={item.fields.amazonLink} 
              target="_blank" 
              rel="noreferrer"
            >
              <LazyLoad offsetTop={200}>
                <div className="collection__image">
                    <img src={`https:${item.fields.featuredImage.fields.file.url}`} alt={`product preview of ${item.fields.title}`}/>
                </div> 
              </LazyLoad>
            </a>
          <div className="collection__info">
            <div className="collection__category">
              <small>{item.fields.category}</small>
            </div>
            <div className="collection__title">
              <h3>{item.fields.title}</h3>
            </div>
            <div className="collection__link">
              <a 
                className="cta"
                href={item.fields.amazonLink} 
                target="_blank" 
                rel="noreferrer">View on Amazon</a>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Cards;