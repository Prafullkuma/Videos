import React from 'react'
import StyledPlaylistItem from './Dq/StyledPlaylistitem'
const PlaylistItems = ({ video, active, played }) => {
    return (
        <div>
            <StyledPlaylistItem active={active} played={played} >
                <h1>PlaylistItems</h1>

            </StyledPlaylistItem>

        </div>
    )
}

export default PlaylistItems
