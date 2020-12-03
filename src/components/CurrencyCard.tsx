import React from 'react'
import styled from '@emotion/styled'

import { CurrencyId, ExchangeRates } from '../types'

import { SPACING_UNIT } from '../theme'
import { CurrencyIcon } from './CurrencyIcons'

const CurrencyCardText = styled.div`
	margin-left: ${SPACING_UNIT}rem;
`

const CurrencyCardContainer = styled.div`
	display: flex;
	padding: 0 ${SPACING_UNIT}rem 0 0;
	border-left: ${SPACING_UNIT / 2}rem solid black;
	h3,
	p {
		margin: 0;
		line-height: ${SPACING_UNIT * 2}rem;
	}
`

type CurrencyCardProps = {
	exchangeRates: ExchangeRates
	baseCurrency: CurrencyId
}

// NOTE: extract and test later, displayRate is incomplete (precision?) and buggy (see 'MOP' output)
const displayName = ({ nameI18N, currency }: { nameI18N?: string; currency: string }): string =>
	nameI18N ? nameI18N.toLowerCase() : currency
const displayRate = ({ rate, precision }: { rate: number; precision: number }): string =>
	`${(1 / rate).toPrecision(precision + 1)}`

export const CurrencyCard = ({ exchangeRates, baseCurrency }: CurrencyCardProps) => {
	const { currency, nameI18N, exchangeRate, precision } = exchangeRates
	return (
		<CurrencyCardContainer>
			<CurrencyIcon currency={currency} />
			<CurrencyCardText>
				<h3 title="currency name">{displayName({ nameI18N, currency })}&nbsp;</h3>
				{exchangeRate ? (
					<p title="currency exchange rate">
						1 {currency} = {displayRate({ rate: exchangeRate.middle, precision })} {baseCurrency}
					</p>
				) : (
					<p title="currency exchange rate">exchange rate not available</p>
				)}
			</CurrencyCardText>
		</CurrencyCardContainer>
	)
}
