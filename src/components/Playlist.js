import React from "react";

const Playlist = (props) => {
    return (
      <p className={`${props.tileClassName}`} onClick={props.clickPlaylist}>
        {props.name}
      </p>
    )
}

export default Playlist
