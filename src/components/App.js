import React from "react"
import PlaylistCollection from "./PlaylistCollection"

const App = (props) => {
  const dataObjArray = props.data

  return (
    <div className="grid-container app">
      <h1 className="title">React Music Player</h1>
      <PlaylistCollection dataObjArray={dataObjArray.playlists} />
    </div>
  )
}

export default App
