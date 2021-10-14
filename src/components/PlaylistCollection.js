import React, { useState } from "react"
import Playlist from "./Playlist"

const PlaylistCollection = (props) => {
  const [selectedPlaylist, setSelectedPlaylist] = useState(null)

  const playlists = props.dataObjArray.map((playlist) => {
    // debugger
    const handleSelectPlaylist = () => {
      // debugger
      setSelectedPlaylist(playlist.id)
    }

    let selectedClass = ""

    if (selectedPlaylist === playlist.id) {
      selectedClass = "selected"
    }

    return (
      <Playlist
        key={playlist.id}
        songs={playlist}
        handleSelectPlaylist={handleSelectPlaylist}
        selectedClass={selectedClass}
      />
    )
  })

  console.log(selectedPlaylist)

  return (
    <div>
      <h1>Playlists</h1>
      {playlists}
    </div>
  )
}

export default PlaylistCollection
