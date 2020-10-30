import React from 'react'
import Video from '../Styles/Video'
import PlayList from './PlayList'
import { ThemeProvider } from 'styled-components'


const theme = {
    bgcolor: '#353535',
    bgcolorItem: '#414141',
    bgcolorItemActive: '#405c63',
    bgcolorPlayed: '#526d4e',
    border: 'none',
    borderPlayed: 'none',
    color: '#fff'
}
const themeLight = {
    bgcolor: '#fff',
    bgcolorItem: '#fff',
    bgcolorItemActive: '#80a7b1',
    bgcolorPlayed: '#7d9979',
    border: '1px solid #353535',
    borderPlayed: 'none',
    color: '#353535'
}
const Wbnplayer = (props) => {

    return (
        <ThemeProvider theme={}>
            <div>
                <Video />
                <PlayList />
            </div>
        </ThemeProvider>

    )
}

export default Wbnplayer
