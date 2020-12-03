import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './components/App'
import { GlobalStyles } from './components/GlobalStyles'
import { BrowserRouter as Router} from 'react-router-dom'

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
		<Router>
			<GlobalStyles />
			<App />
		</Router>
	</React.StrictMode>,
	document.getElementById('root')
)
