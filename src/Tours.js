import React from 'react';
import Tour from './Tour';
const Tours = ({tours, removeTours}) => {
  return <section>
    <div className="title">
      <h2>
        our tours
      </h2>
      <div className="underline"></div>
    </div>
    <div className="tours">
      {tours.map((p)=>{
        return <Tour key={p.id} {...p} removeTours={removeTours} />
      })}
    </div>
  </section>
};

export default Tours;
