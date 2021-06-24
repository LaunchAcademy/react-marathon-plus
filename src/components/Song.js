import React from "react"

const Song = (props) => {

  let songClassName = ""
  if (props.yellowBackgroundStatus === true){
    songClassName = "selected"
  }

  return(
    <p onClick={props.changeSelectedSongId} className={songClassName}>
      {props.songArtist} - {props.songName}
    </p>
  )
}

export default Song