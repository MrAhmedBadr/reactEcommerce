import React from 'react'
import { myButton } from '../button'
import './CategoryItems.css'






const CategoryItems = ({item}) => {
  return (
    <div className="card bg-dark text-white items-container">
  <img src={item.img} className="card-img" alt="Stony Beach"/>
  <div className="card-img-overlay info">
    <h5 className="card-title">{item.title}</h5>
    <div className='button'>{myButton}</div>
    
  </div>
</div>
  )
}

export default CategoryItems