import React, { useState } from "react"

import Song from "./Song"

const SongCollection = (props) => {
  const [selectedSong, setSelectedSong] = useState(null)

  const songTiles = props.songs.map((song) => {
    const toggleSelectedSong = () => {
      setSelectedSong(song.id)
    }

    let selectedStatus = ""
    if (selectedSong === song.id) {
      selectedStatus = "selected"
    }
    
    return(
      <Song
        key={song.id}
        song={song}
        toggleSelectedSong={toggleSelectedSong}
        selectedStatus={selectedStatus}
      />
    )
  })

  return(
    <div className="cell small-6">
      <h3>Songs</h3>
      
      {songTiles}
    </div>
  )
}

export default SongCollection