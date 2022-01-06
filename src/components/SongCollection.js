import React, { useState } from "react"
import Song from "./Song"

const SongCollection = (props) => {
  const [selectedSongId, setSelectedSongId] = useState(null)
  const songTiles = props.songs.map((song) => {
    const clickSong = () => {
      setSelectedSongId(song.id)
    }

    let tileClassName
    if (selectedSongId === song.id) {
      tileClassName = 'selected'
    }

    return (
      <Song
        key={song.id}
        name={song.name}
        artist={song.artist}
        clickSong={clickSong}
        tileClassName={tileClassName}
      />
    )
  })

  return (
    <div className="cell small-6">
      <h2>Songs</h2>
      {songTiles}
    </div>
  )
}

export default SongCollection
