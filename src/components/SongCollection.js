import React, { useState } from "react"

import Song from "./Song"

const SongCollection = (props) => {

  const [clickedSongId, setClickedSongId] = useState(null)

  const songComponents = props.songs.map((songObject) => {

    const changeSelectedSongId = () => {
      setClickedSongId(songObject.id)
    }

    let yellowBackgroundStatus = false
    if (clickedSongId === songObject.id){
      yellowBackgroundStatus = true
    }

    return(
      <Song 
        key={songObject.id}
        songName={songObject.name}
        songArtist={songObject.artist}
        changeSelectedSongId={changeSelectedSongId}
        yellowBackgroundStatus={yellowBackgroundStatus}
      />
    )
  })

  return(
    <div className="cell small-6">
      <h1> 
        Songs
      </h1>

      {songComponents}

    </div>
  )
}

export default SongCollection