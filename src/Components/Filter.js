import React from 'react';


const Filter = ({listing, setFilter, filter}) => {

  const doThing = event => {
    setFilter(event.target.value)
  }

  const Select = ({handler, className}) => {
    if(listing) {
      const categories = [];
      const root = listing.data.items;
      root.forEach((options) => {
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
      {console.log('why did I rerender?')}
      <Select handler={doThing} className='select-master'/>
    </div>
  )
}

export default Filter;