import React from 'react'
import StyledPlaylistHeader from './Dq/StyledListHeader'
import styledJourney from './Dq/StyledJourney'
function PlaylistHeader() {
    return (
        <StyledPlaylistHeader>
            <p>{active.title}</p>
            <styledJourney>
                {active.num}
            </styledJourney>
        </StyledPlaylistHeader >

    )
}

export default PlaylistHeader
