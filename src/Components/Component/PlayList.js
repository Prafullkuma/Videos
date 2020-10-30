import React from 'react'
import PlayListHeader from '../Styles/PlaylistHeader'
import PlayListItems from '../Styles/PlaylistItem'
import NightMode from '../Styles/NightMode'
import StyledPlaylist from '../Styles/Dq/StyledPlayList'
const PlayList = props => {
    return (
        <div>
            < StyledPlaylist>
                <NightMode />
                <PlayListHeader />
                <PlayListItems />
            </ StyledPlaylist >
        </div>
    )
}

export default PlayList
