import React from 'react'

const Playlist = (props) =>{
  // debugger
  // const { name } = props
  // const name = props.name

  return (    
    <li className={props.toggleClass} onClick={props.togglePlaylistSelection}>{props.name}</li>
  )
}

export default Playlist