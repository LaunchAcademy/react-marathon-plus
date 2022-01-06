import React from "react"

const Song = (props) => {
  return (
    <p className={props.tileClassName} onClick={props.clickSong}>
      {props.artist} - {props.name}
    </p>
  )
}

export default Song
