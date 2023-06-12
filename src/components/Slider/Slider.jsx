import React from 'react'
import './Slider.css'
import { myButton } from '../button'



let manImg = './assets/sum-sale.png'
let man2 = './assets/man2.png'
let man3 = './assets/man3.png'

const Slider = () => {
  return (
    
<div id="carouselMaterialStyle" className="carousel slide carousel-fade car-container" data-mdb-ride="carousel">
 
  <div className="carousel-indicators">
    <button type="button" data-mdb-target="#carouselMaterialStyle" data-mdb-slide-to="0" className="active" aria-current="true"
      aria-label="Slide 1"></button>
    <button type="button" data-mdb-target="#carouselMaterialStyle" data-mdb-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-mdb-target="#carouselMaterialStyle" data-mdb-slide-to="2" aria-label="Slide 3"></button>
  </div>

 
  <div className="carousel-inner rounded-5 shadow-4-strong ">
   
    <div className="carousel-item active">
      <img src={manImg} className="d-block w-100"
        alt="Sunset Over the City" />
      <div className="carousel-caption d-none d-md-block car-cap">
        <h1>SUMMER SALE</h1>
        <p>Don't compromise on style ! get flat 30% off for new arrivals</p>
        <button className="btn btn-outline-info" type="submit">shop now</button>
      </div>
    </div>

   
    <div className="carousel-item ">
      <img src={man2} className="d-block w-100"
        alt="Sunset Over the City" />
      <div className="carousel-caption d-none d-md-block car-cap">
        <h1>SUMMER SALE</h1>
        <p>Don't compromise on style ! get flat 30% off for new arrivals</p>
        <button className="btn btn-outline-info" type="submit">shop now</button>
      </div>
    </div>

   
    <div className="carousel-item ">
      <img src={man3} className="d-block w-100"
        alt="Sunset Over the City" />
      <div className="carousel-caption d-none d-md-block car-cap">
        <h1>SUMMER SALE</h1>
        <p>Don't compromise on style ! get flat 30% off for new arrivals</p>
        {myButton}
      </div>
    </div>
  </div>
 

  
  <button className="carousel-control-prev but1" type="button" data-mdb-target="#carouselMaterialStyle" data-mdb-slide="prev">
    <span className="carousel-control-prev-icon but1" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next but1" type="button" data-mdb-target="#carouselMaterialStyle" data-mdb-slide="next">
    <span className="carousel-control-next-icon but1" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

  )
}

export default Slider