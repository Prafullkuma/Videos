import React from 'react'
import Video from '../Styles/Video'
import PlayList from './PlayList'
import { ThemeProvider } from 'styled-components'
const Wbnplayer = (props) => {
    const there = {
        bgcolor: '#353535',
        bgcolorItem: '#414141',
        bgcolorItemActive: '#405c63',
        bgcolorPlayed: '#526d4e',
        border: 'none',
        borderPlayed: 'none',
        color: '#fff'
    }
    return (
        <div>
            <Video />
            <PlayList />
        </div>
    )
}

export default Wbnplayer
