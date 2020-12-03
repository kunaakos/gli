/**
 * Type definitions that are used app-wide.
 */

export type ISO8601Date = string

export type InstituteId = number
export type CurrencyId = string // could be an enum

export type ExchangeRate = {
	buy: number
	middle: number
	sell?: number
	indicator: number
	lastModified: ISO8601Date
}

// NOTE: I didn't spend a lot of time naming types properly, since I don't know much about the domain,
// and in the real world I'd go with existing conventions and rely on the domain knowledge of the team.
// This structure would likely cause headaches down the line in a real app.
export type ExchangeRates = {
	currency: CurrencyId
	precision: number
	nameI18N?: string
	exchangeRate?: ExchangeRate
	banknoteRate?: ExchangeRate
	flags?: string[]
	denominations?: number[]
}
