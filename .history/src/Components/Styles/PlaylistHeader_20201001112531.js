import React from 'react'
import StyledPlaylistHeader from './Dq/StyledListHeader'
import styledJourney from './Dq/StyledJourney'
const PlaylistHeader = ({ active, total }) {
    return (
        <StyledPlaylistHeader>
            <p>{active.title}</p>
            <styledJourney>
                {active.num}/{total}
            </styledJourney>
        </StyledPlaylistHeader >

    )
}

export default PlaylistHeader
