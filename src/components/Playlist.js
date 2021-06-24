import React from "react"

const Playlist = (props) => {
  // debugger
    return(
        <p onClick={props.changeClicked} className={props.selectedClassName}>
          {props.playlistName}
        </p>
    )
}

export default Playlist