import React from 'react'
import PlayListHeader from '../PlayListHeader'
import PlayListItems from '../Component/PlayListItems'
import NightMode from '../NightMode'
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
