import React from 'react'
import PlayListHeader from '../Styles/PlaylistHeader'
import PlayListItems from '../Styles/PlaylistItems'
import NightMode from '../Styles/NightMode'
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
