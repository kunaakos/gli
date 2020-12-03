import FX_API_RESPONSE from './fx.json'

import { InstituteId, ISO8601Date, CurrencyId, ExchangeRates } from '../types'

type FxApiResponse = {
	institute: InstituteId
	lastUpdated: ISO8601Date
	comparisonDate: ISO8601Date
	baseCurrency: CurrencyId
	fx: ExchangeRates[]
}

export const getFx = async (): Promise<FxApiResponse> => {
	const response: FxApiResponse = FX_API_RESPONSE
	return response
}
