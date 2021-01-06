import React, {memo} from 'react';
import {Select, MenuItem} from '@material-ui/core/';


const Filter = memo(({filter, listing, changeFilter}) => {


  const SelectParent = ({changeFilter}) => {
    if(listing) {
      const cleanArray = [];
      listing.data.items.forEach((item) => {
        if(!cleanArray.includes(item.fields.category)) {
          cleanArray.push(item.fields.category)
        }
      })
      return (
        <Select className="filter" labelWidth={1300} variant="standard" defaultValue="All" autoWidth={false} onChange={(event) => changeFilter(event)}>
          <MenuItem value="All">All</MenuItem>
          {
            cleanArray.map((category, index) => (
              <MenuItem key={index} value={category}>{category}</MenuItem>
            ))
          }
          
        </Select>
      )
    } else {
      return <div>loading...</div>
    }
  }


  return (
    <div className="select-parent">
      <SelectParent changeFilter={changeFilter}/>
      
    </div>
  )
})

export default Filter;