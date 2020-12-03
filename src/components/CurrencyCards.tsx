import React from 'react'
import { useState, useEffect } from 'react'
import { css } from '@emotion/react'
import styled from '@emotion/styled'

import { CurrencyId, ExchangeRates } from '../types'

import { containerStyles, SPACING_UNIT } from '../theme'
import { CurrencyCard } from './CurrencyCard'

const CurrencyCardsContainer = styled.div`
	${containerStyles};
	display: flex;
	flex-direction: column;
	& > * {
		&:not(:first-of-type) {
			margin-top: ${SPACING_UNIT}rem;
		}
	}
`

type CurrencyCardsProps = {
	exchangeRates: ExchangeRates[]
	baseCurrency: CurrencyId
}

/**
 * Renders CurrencyCards for the exchangeRates passed in
 */
export const CurrencyCards = ({ exchangeRates, baseCurrency }: CurrencyCardsProps) => {
	return (
		<CurrencyCardsContainer>
			{exchangeRates.map(exchangeRates => (
				<CurrencyCard key={exchangeRates.currency} baseCurrency={baseCurrency} exchangeRates={exchangeRates} />
			))}
		</CurrencyCardsContainer>
	)
}
