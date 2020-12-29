import React from "react"

const Song = (props) => {

  return(
    <p className={props.selectedStatus} onClick={props.toggleSelectedSong}>{props.song.artist} - {props.song.name}</p>
  )
}

export default Song