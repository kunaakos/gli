import FX_API_RESPONSE from './fx.json'

type InstituteId = number
type ISO8601Date = string
type CurrencyId = string // could be an enum

type ExchangeRate = {
	buy: number
	middle: number
	sell?: number
	indicator: number
	lastModified: ISO8601Date
}

type ExchangeRates = {
	currency: CurrencyId
	precision: number
	nameI18N?: string
	exchangeRate?: ExchangeRate
	banknoteRate?: ExchangeRate
	flags?: string[]
	denominations?: number[]
}

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
