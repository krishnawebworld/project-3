import React from 'react'
import './Breadcrums.css';
import arrow_icon from '../Assets/breadcrum_arrow.png'
import Product from '../../Pages/Product';

const Breadcrums = () => {
  return (
    <div className='breadcrum'>
      Home <img src={arrow_icon} alt="" /> 
      SHOP <img src={arrow_icon} alt="" /> {Product.category} <img src={arrow_icon} alt="" /> {Product.name}
    </div>
  )
}

export default Breadcrums
