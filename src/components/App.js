import React from 'react'
import PlaylistCollection from './PlaylistCollection'

import SongCollection from './SongCollection';


const App = (props) => {

  return (
    <div className="grid-container app">
      <h1 className="title">React Music Player</h1>
    
      <PlaylistCollection playlistData={props.data.playlists}/>

      <SongCollection songData={props.data.songs} />
    </div>
  );
}

export default App
