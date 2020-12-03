import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './components/App'
import { GlobalStyles } from './components/GlobalStyles'

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
		<GlobalStyles/>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
)
