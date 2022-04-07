import React from "react"

const Song = (props) => {
  // const songClassName = props.selectedStatus ? "selected" : ""

  const songSelector = () => {
    props.setSelectedSongId(props.songId)
  }

  let songClassName = ""
  if (props.selectedStatus){
    songClassName = "selected"
  }

  return(
    <p className={songClassName} onClick={songSelector}> 
      {props.songName} - {props.songArtist} 
    </p>
  )
}

export default Song