import React from 'react'
import PlayListHeader from '../Styles/PlaylistHeader'
import PlayListItems from '../Styles/PlaylistItems'
import NightMode from '../Styles/NightMode'
import styledPlayList from '../Styles/Dq/StyledPlayList'
const PlayList = props => {
    return (
        <div>
            <NightMode />
            <PlayListHeader />
            <PlayListItems />
        </div>
    )
}

export default PlayList
