import React from 'react'
import { useState, useEffect } from 'react'
import { css } from '@emotion/react'
import styled from '@emotion/styled'

import { ExchangeRates } from '../types'
import { getFx } from '../api/fx'

import { containerStyles } from '../theme'

import { CurrencyCards } from '../components/CurrencyCards'

/**
 * Istead of full-blown theming, static constants are used.
 * The same values can be retrieved from a theme provider later if dynamic theming is needed.
 */

const AppHeader = styled.header`
    background: black;
    color: white;
    position: sticky;
    top: 0;
`
const AppTitle = styled.h1`
    display: block;
    ${containerStyles};
`

const ContainerPlaceholder = styled.div`
	${containerStyles};
`

export const App = () => {
	const [exchangeRates, setExchangeRates] = useState<ExchangeRates[] | null>(null)
	useEffect(() => {
		getFx().then(apiResponse => setExchangeRates(apiResponse.fx))
	}, [])

	return (
		<>
			<AppHeader><AppTitle>Exchange Rates</AppTitle></AppHeader>
			{exchangeRates ? (
				<CurrencyCards baseCurrency={'EUR'} exchangeRates={exchangeRates} />
			) : (
				<ContainerPlaceholder>loading data...</ContainerPlaceholder>
			)}
		</>
	)
}
