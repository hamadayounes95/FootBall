import React, { useState } from 'react'
import Player from './Player'

const Players = () => {
    const [players, setPlayers] = useState([{
        name: "Lionel Messi",
        team: "Paris Saint-Germain",
        nationality: "Argentina",
        jerseyNumber: 30,
        age: 34,
        image: "https://upload.wikimedia.org/wikipedia/commons/b/b4/Lionel-Messi-Argentina-2022-FIFA-World-Cup_%28cropped%29.jpg",
      },
      {
        name: "Cristiano Ronaldo",
        team: "Manchester United",
        nationality: "Portugal",
        jerseyNumber: 7,
        age: 36,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Cristiano_Ronaldo_WC2022_-_01_%28cropped%29.jpg/220px-Cristiano_Ronaldo_WC2022_-_01_%28cropped%29.jpg",
      },
      {
          name: "Ronaldinho",
          team: "Ac Milan",
          nationality: "Brazil",
          jerseyNumber: 99,
          age: 38,
          image: "https://cdn.bleacherreport.net/images_root/slides/photos/000/633/543/106887172_original.jpg?1294936346",
        },
        {
          name: "Ronaldo",
          team: "Real Madrid",
          nationality: "Brazil",
          jerseyNumber: 7,
          age: 36,
          image: "https://media.gettyimages.com/id/51805383/photo/a-portrait-of-ronaldo-of-real-madrid-prior-to-the-uefa-champions-league-group-b-match-between.jpg?s=612x612&w=gi&k=20&c=C2eL4FMjXLXKWQIEbQaporf2C32YSPAub4om898pkTI=",
        }
     
    ])
    const [name,setName]=useState('')
    const [team,setTeam]=useState('')
    const [nationality,setNationality]=useState('')
    const [jerseyNumber,setJerseyNumber]=useState('')
    const [age,setAge]=useState('')
    const [image,setImage]=useState('')

    const add =()=>{
        setPlayers([...players,{name:name , team:team , nationality:nationality , jerseyNumber:jerseyNumber , age:age , image:image}])
    }
      
  return (
    <div className='flex flex-col gap-5 m-10'> 
        <input type='text' placeholder='name'className="input input-bordered input-primary w-full max-w-xs" onChange={event=>setName(event.target.value)}></input>
        <input type='text' placeholder='team'className="input input-bordered input-primary w-full max-w-xs" onChange={event=>setTeam(event.target.value)}></input>
        <input type='text' placeholder='nationality' className="input input-bordered input-primary w-full max-w-xs"onChange={event=>setNationality(event.target.value)}  ></input>
        <input type='text' placeholder='jerseyNumber' className="input input-bordered input-primary w-full max-w-xs"onChange={event=>setJerseyNumber(event.target.value)} ></input>
        <input type='text' placeholder='age'className="input input-bordered input-primary w-full max-w-xs"onChange={event=>setAge(event.target.value)} ></input>
        <input type='text' placeholder='image'className="input input-bordered input-primary w-full max-w-xs"onChange={event=>setImage(event.target.value)}  ></input>
        <button className='btn w-full max-w-xs' onClick={add} >Add Player</button>
    <div className='grid grid-cols-4 gap-6 mx-9'>
     {players.map(p=>(
        <div> 
        <Player name={p.name}
        team={p.team}
        nationality={p.nationality}
        jerseyNumber={p.jerseyNumber}
        age={p.age}
        image={p.image}>

        </Player>
        </div>
        
     ))}
    </div>
    </div>
    
  )
}

export default Players