import { getFx } from '../api/fx'
import {useState, useEffect} from 'react'

import { ExchangeRates } from '../types'

/**
 * There's no state managment solution used in this tiny app to move this logic to, so it gets its own hook!
 */
export const useExchangeRates = () => {
	const [exchangeRates, setExchangeRates] = useState<ExchangeRates[] | null>(null)
	useEffect(() => {
		getFx().then(apiResponse => setExchangeRates(apiResponse.fx))
	}, [])
	return exchangeRates
}
