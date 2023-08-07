import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// import Tour from './Tour'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'
function App() {

  const [isloading, setIsloading] = useState(true);
  const [tours, setTours] = useState([]);

  const removeTours = (id) => {
    const NewTours =tours.filter((tour)=>tour.id !==id)
    setTours(NewTours);
  }

  const fetchTours = async () => {
    setIsloading(true)
    try {
      const response = await fetch(url);
    const tours = await response.json();
    setTours(tours);
    console.log(tours);
    } catch (error) {
      console.log(error);
      
    }
    setIsloading(false);
  }

  useEffect(()=>{
    fetchTours();
  },[]);

  if (isloading){
    return <main>
      <Loading></Loading>
    </main>
  }

  if(tours.length === 0){
    return( <main>
      <div className="title">
        <h2>No tours left</h2>
        <button className='btn' style={{marginTop:'2rem'}} onClick={fetchTours}>Show Kiran</button>
      </div>
    </main>);
  };

  return <main>
    <Tours tours={tours} removeTours={removeTours} />
  </main>
}
export default App
