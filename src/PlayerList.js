import React from 'react'
import Player from './Player'
import Players from './Players'



const PlayerList = () => {
    
  return (
    <div onLoad={load()}>
        <Players></Players>
    </div>
  )
}

export default PlayerList