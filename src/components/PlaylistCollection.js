import React, {useState} from 'react'
import Playlist from './Playlist'

const PlaylistCollection = (props) => {

  const [ selectedId, setSelected ] = useState(null)
  
  console.log(selectedId)
  
  const playlistArray = props.playlistData.map((playlist) => {
    let selected 
    if (playlist.id === selectedId) {
      selected = true
    } else {
      selected = false 
    }
    
    
    const playlistSelector = () => {
      setSelected(playlist.id)
    }
    
    return <Playlist 
      key={playlist.id} 
      name={playlist.name}
      id={playlist.id}
      selected={selected}
      playlistSelector={playlistSelector}
    />
  })

  return (
    <div>
      <h1>Playlists</h1>
      <div>
        {playlistArray}
      </div>
    </div>
  )
}


export default PlaylistCollection