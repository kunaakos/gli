import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './components/App'

import { css, Global } from '@emotion/react'

const globalStyles = css`
    body {
		margin: 0;
		font-family: sans-serif;
    }
`

ReactDOM.render(
    <React.StrictMode>
		<Global styles={globalStyles}/>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
)
