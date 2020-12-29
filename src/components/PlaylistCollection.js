import React, { useState } from 'react'

import Playlist from './Playlist'

const PlaylistCollection=(props)=>{
  const [selectedPlaylist, setSelectedPlaylist] = useState(null)

    // debugger
  const playlistData = props.playlists.map((playlist) => {
    // debugger
    let toggleClass = ''

    const togglePlaylistSelection = () => {
      setSelectedPlaylist(playlist.id)
    }

    if (selectedPlaylist === playlist.id) {
      toggleClass = 'selected'
    }

    return (
      <Playlist
        key={playlist.id}
        id={playlist.id}
        name={playlist.name}
        togglePlaylistSelection={togglePlaylistSelection}
        toggleClass={toggleClass}
      />
    )
  })

  return (
    <div className="cell small-6">
      <h3>Playlists</h3>
      
      {playlistData}
    </div> 
  )
}

export default PlaylistCollection