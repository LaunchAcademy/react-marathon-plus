import React, { useState } from 'react'

import Playlist from "./Playlist"

const PlaylistCollection = props => {
  // debugger
  
  const [selectedPlaylistId, setSelectedPlaylistId] = useState(null)
  // console.log(selectedPlaylistId)


  const playlistMap = props.playlistData.map((playlist) =>{
    // debugger
    return (
      <Playlist key={playlist.id}
        playlistData={playlist} 
        selectedId={setSelectedPlaylistId}
        selectedPlaylistId={selectedPlaylistId}
      />
    )
  })

  return(
    <>
      <h1>Playlists</h1>
      {playlistMap}
    </>
  )
}

export default PlaylistCollection