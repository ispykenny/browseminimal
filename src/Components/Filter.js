import React from 'react';
import Inner from './Inner';


const Filter = ({listing, setFilter, filter}) => {

  const doThing = event => {
    setFilter(event.target.value)
  }

  const Select = ({handler, className}) => {
    if(listing) {
      const categories = [];
      const root = listing.data.items;
      root.map((options) => {
        if(!categories.includes(options.fields.category)) {
          categories.push(options.fields.category)
        }
      })
      return (
        <select 
          onMouseUp={handler} 
          className={className}
        >
          <option>All</option>
          {categories.map((option, index) => (
            <option key={index}>{option}</option>
          ))}
        </select>
      )
    } else {
      return (
        <select>
          <option>Loading...</option>
        </select>
      )
    }
  }

  return (
    <div className="select-parent">
      <Select handler={doThing} className='select-master'/>
    </div>
  )
}

export default Filter;