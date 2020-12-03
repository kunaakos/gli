import React from 'react'
import { useCallback } from 'react'
import styled from '@emotion/styled'

import { ExchangeRates } from '../types'

import { containerStyles, SPACING_UNIT } from '../theme'

import { CurrencyCards } from '../components/CurrencyCards'
import { useExchangeRates } from '../hooks/use-exchange-rates'
import { useQueryState } from '../hooks/use-query-state'

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

const SearchContainer = styled.div`
	${containerStyles};
	display: flex;
`

const SearchInput = styled.input`
	width: 100%;
	box-sizing: border-box;
	font-size: ${SPACING_UNIT}rem;
	margin: 0;
	padding: ${SPACING_UNIT / 2}rem ${SPACING_UNIT}rem 0 ${SPACING_UNIT}rem;
	background: white;
	color: black;

	&::placeholder {
		color: black;
		opacity: 0.7;
	}
	&:focus::placeholder {
		color: transparent;
	}

	border: none;
	outline: none;
	border-radius: 0;
	&:-webkit-autofill,
	&:-webkit-autofill:hover,
	&:-webkit-autofill:focus {
		background-color: white !important;
		color: black !important;
		-webkit-box-shadow: 0 0 0 62.5rem white inset;
	}
`

const filterSearchResults = (queryFragment: string) => (exchangeRates: ExchangeRates): Boolean =>
	Boolean(
		// UPPERCASE matches currency code
		exchangeRates.currency.includes(queryFragment) ||
			// lowercase matches currency name
			(exchangeRates.nameI18N && exchangeRates.nameI18N.toLowerCase().includes(queryFragment))
	)

export const App = () => {
	const [{ query: queryFragment }, setQueryParams] = useQueryState<{ query: string }>({ query: '' })
	const exchangeRates = useExchangeRates()
	const handleSearchInputChange = useCallback(event => setQueryParams({ query: event.target.value }), [])

	const visibleExchangeRates = exchangeRates ? exchangeRates.filter(filterSearchResults(queryFragment)) : null

	return (
		<>
			<AppHeader>
				<AppTitle>Exchange Rates</AppTitle>
				<SearchContainer>
					<SearchInput placeholder={'... search'} value={queryFragment} onChange={handleSearchInputChange} />
				</SearchContainer>
			</AppHeader>
			{visibleExchangeRates && visibleExchangeRates.length ? (
				<CurrencyCards baseCurrency={'EUR'} exchangeRates={visibleExchangeRates} />
			) : (
				// NOTE: a different message should be displayed for different states for better UX,
				// but this is technically correct, and does the job for now :D
				<ContainerPlaceholder>no matches or data :(</ContainerPlaceholder>
			)}
		</>
	)
}
