import React from "react";

const Playlist = (props) => {
  
  let selectedPlaylist 
  if (props.selected === true) {
    selectedPlaylist = "selected"
  }
  
  return(
    <li onClick={props.playlistSelector} className={selectedPlaylist}>
      {props.name}
    </li>
  )
}

export default Playlist