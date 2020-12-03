import { css, Global } from '@emotion/react'

const globalStyles = css`
	body {
		margin: 0;
		font-family: sans-serif;
	}
`

export const GlobalStyles = () => <Global styles={globalStyles} />
