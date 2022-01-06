import React, { useState} from "react";
import Playlist from "./Playlist";

const PlaylistCollection = (props) => {
    const [selectedPlaylistId,  setSelectedPlaylistId] = useState(null)

    const playlistTiles = props.playlists.map(playlist => {
        const clickPlaylist = () => {
            setSelectedPlaylistId(playlist.id)
            console.log(selectedPlaylistId)
            // debugger
        }

let tileClassName = 'tile'
if (selectedPlaylistId === playlist.id) {
tileClassName += ' selected'
}

        return (
            <Playlist 
                key = {playlist.id}
                name = {playlist.name}
                clickPlaylist={clickPlaylist}
tileClassName={tileClassName}
            />
        )
    })

    return(
        <div className="cell small-6">
            <h2>Playlists</h2>
            {playlistTiles}
        </div>
    )

}

export default PlaylistCollection
