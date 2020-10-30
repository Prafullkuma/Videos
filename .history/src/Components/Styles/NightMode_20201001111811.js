import React from 'react'
import StyledNightMode from './Dq/StyledNightMode'
const NightMode = ({ NightModeCallback, nightMode }) => {
    return (
        <StyledNightmode>
            <div>
                <span>NightMode</span>
                <label>
                    <input type="checkbok" checked={nightMode} onChange={NightModeCallback} />
                </label>
            </div>
        </StyledNightmode>

    )
}

export default NightMode
