import React from 'react'

const Playlist = props => {
  // debugger
  //logic goes here
  
  const theOnClick = () =>{
    props.selectedId(props.playlistData.id)
    // console.log("This was clicked")
  }

  let selected = ""
  if (props.playlistData.id === props.selectedPlaylistId) {
    selected = "selected"
  }

  return (
    <>
      <p onClick={theOnClick} className={selected}>{props.playlistData.name}</p>
    </>
  )
}

export default Playlist