import React from 'react'
import Players from './Players'

const Player = ({ name, team, nationality, jerseyNumber, age, image }) => {

  return (
    
    <div>
       
        <div className="card  bg-base-100 shadow-xl">
  <figure><img src={image} alt="Shoes"  className='h-80 w-full object-cover'/></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p> team :{team}</p>
    <p> nationality : {nationality}</p>
    <p> jerseyNumber :{jerseyNumber}</p>
    <p> Age :{age}</p>
   
  </div>
</div>

    </div>
  )
}

export default Player
