import React from "react"

const Playlist = (props) => {
  const playListObject = props.songs.name

  const handleClick = (event) => {
    event.preventDefault()
    console.log("I was clicked")
    props.handleSelectPlaylist()
  }

  return (
    <p onClick={handleClick} className={props.selectedClass}>
      {playListObject}
    </p>
  )
}

export default Playlist
