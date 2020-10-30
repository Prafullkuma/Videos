import React from 'react'
import Video from '../Styles/Video'
import PlayList from './PlayList'
import { ThemeProvider } from 'styled-components'
const Wbnplayer = (props) => {
    return (
        <div>
            <Video />
            <PlayList />
        </div>
    )
}

export default Wbnplayer
