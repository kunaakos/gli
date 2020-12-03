import React from 'react'
import styled from '@emotion/styled'

import { iconSVGs } from './assets'
import { CurrencyId } from '../../types'
import { SPACING_UNIT } from '../../theme'

export const CurrencyIconContainer = styled.div`
	width: ${SPACING_UNIT * 4}rem;
	height: ${(SPACING_UNIT * 4) / 1.71}rem;
	img {
		width: ${SPACING_UNIT * 4}rem;
		height: ${(SPACING_UNIT * 4) / 1.71}rem;
		object-fit: cover;
		object-position: center;
	}
`

type CurrencyIconProps = {
	currency: CurrencyId
}

export const CurrencyIcon = ({ currency }: CurrencyIconProps) => (
	<CurrencyIconContainer>{iconSVGs[currency] && <img src={iconSVGs[currency]} />}</CurrencyIconContainer>
)
