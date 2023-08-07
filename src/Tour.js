// import React, { useState } from 'react';

const Tour = ({image, id, price, info, name, removeTours}) => {
  return <article className='single-tour' key={id} >
    <img src={image} alt={name} className='img'/>
    <span className='tour-price'>$ {price} </span>
    <div className="tour-info">
      <h4>{name} </h4>
      <p>{info}</p>
      <button type='button' className='btn btn-block delete-btn' onClick={()=>removeTours(id)}>Not Interested</button>
    </div>
  </article>
};

export default Tour;
