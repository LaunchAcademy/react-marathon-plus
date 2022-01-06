import React from 'react' 

const Playlist = (props) => {
  // debugger
  console.log(props.selectedClass);
  const {name} = props
  // const onClickHandler =() => {
  //   console.log("I was clicked!");
  // }

  // alternative: define wrapper here instead of PlaylistCollection
  // const handleClickWrapper = () => {
  //   // debugger
  //   props.setSelectedPlaylist(props.id)
  // }

  return (
    <h5 
      className={props.selectedClass} 
      onClick={props.handleClickWrapper}>{name} </h5>
  )
}

export default Playlist;