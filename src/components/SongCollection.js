import React, { useState } from "react"

import Song from "./Song"

const SongCollection = (props) => {


  const [selectedSongId, setSelectedSongId] = useState(null)

  const songComponentArray = props.songData.map((songObject) => {

    const selectedStatus = selectedSongId === songObject.id

    return <Song
      songName={songObject.name}
      songArtist={songObject.artist}
      selectedStatus={selectedStatus}
      setSelectedSongId={setSelectedSongId}
      songId={songObject.id}
    />
  })
  
  return(
    <div>
      <h1>Songs</h1>

      {songComponentArray}
    </div>
  )
}



export default SongCollection