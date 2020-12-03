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

// this is critical for layout, and we need it to run before anything renders to avoid a flash
function adjustRem() {
	if (window.innerWidth < 1440) {
		document.documentElement.style.fontSize = '16px'
	} else {
		document.documentElement.style.fontSize = window.innerWidth / 90 + 'px'
	}
}
adjustRem()
window.addEventListener('resize', adjustRem)

ReactDOM.render(
	<React.StrictMode>
		<Global styles={globalStyles} />
		<App />
	</React.StrictMode>,
	document.getElementById('root')
)
