import React, { useState } from "react"
import Playlist from "./Playlist"

const PlaylistCollection = (props) => {
  // debugger
  const [selectedPlaylistId, setSelectedPlaylistId] = useState(null)
  
  const playlistsArray = props.playlists.map((playlist) => {
    // debugger
    
    const handleClickWrapper = () => {
      // debugger
      console.log(playlist.id);
      setSelectedPlaylistId(playlist.id)
    }

    let selectedClass = ""

    if (selectedPlaylistId === playlist.id) {
      selectedClass = "selected"
    }
    
    return (
      <Playlist
        playlist={playlist}
        name={playlist.name}
        id={playlist.id}
        key={playlist.id}
        handleClickWrapper={handleClickWrapper}
        selectedClass={selectedClass}
      />
    )
  })

  return (
    <div>
      <h3>Playlists</h3>
      {playlistsArray}
    </div>
  )
}

export default PlaylistCollection
