import React, {useState} from "react"
import Playlist from "./Playlist"

const PlaylistCollection = (props) => {

    const [clickedId, changeClickedId] = useState(null)

    const playlistComponents = props.playlists.map((playlistObject) => {

        const changeClicked = (event) => {
            changeClickedId(playlistObject.id)
        }

        let selected
        if (clickedId === playlistObject.id){
            selected = "selected"
        } else {
            selected = ""
        }


        return( 
          <Playlist 
            playlistName={playlistObject.name} 
            key={playlistObject.id} 
            changeClicked={changeClicked}
            selectedClassName={selected}
          />
        )
    })

    return (
        <div className="cell small-6">
            <h1>Playlists</h1>
            {playlistComponents}
        </div>
    )
}

export default PlaylistCollection