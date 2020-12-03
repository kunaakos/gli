import React from 'react'
import { render, screen } from '@testing-library/react'
import { generateImage } from 'jsdom-screenshot'
import { CurrencyCard } from './CurrencyCard'
import { ExchangeRates } from '../types'

const GENERATE_IMAGE_OPTIONS = {
  serve: ['public'],
  viewport: { width: 400, height: 100}
} 

const completeData: ExchangeRates = {
	currency: 'CAD',
	precision: 2,
	nameI18N: 'Canadian Dollar',
	denominations: [1000, 100, 50, 20, 10, 5],
	exchangeRate: {
		buy: 1.489,
		middle: 1.4975,
		sell: 1.506,
		indicator: 0,
		lastModified: '2018-11-08T23:00:00Z',
	},
	banknoteRate: {
		buy: 1.4695,
		middle: 1.502,
		sell: 1.5345,
		indicator: 0,
		lastModified: '2018-11-06T23:00:00Z',
	},
	flags: ['provided'],
}

test('renders a card with all information formatted properly, if data available', () => {
	render(<CurrencyCard baseCurrency="EUR" exchangeRates={completeData} />)
	const currencyNameElement = screen.getByTitle(/currency name/i)
	expect(currencyNameElement).toHaveTextContent('canadian dollar') // NOTE: yes, this should be lowercased!
	const currencyExchangeRateElement = screen.getByTitle(/currency exchange rate/i)
	expect(currencyExchangeRateElement).toHaveTextContent('1 CAD = 0.668 EUR')
})

test('looks the way it should with complete data', async () => {
	render(<CurrencyCard baseCurrency="EUR" exchangeRates={completeData} />)
	const screenshot = await generateImage(GENERATE_IMAGE_OPTIONS)
	expect(screenshot).toMatchImageSnapshot()
})

const incompleteData: ExchangeRates = { currency: 'STD', precision: 2 }

test('renders a card with placesholders and fallback values, if data incomplete', () => {
	render(<CurrencyCard baseCurrency="EUR" exchangeRates={incompleteData} />)
	const currencyNameElement = screen.getByTitle(/currency name/i)
	expect(currencyNameElement).toHaveTextContent('STD') // falls back to currency code
	const currencyExchangeRateElement = screen.getByTitle(/currency exchange rate/i)
	expect(currencyExchangeRateElement).toHaveTextContent('exchange rate not available') // displays warning message
})

test('looks the way it should with incomplete data', async () => {
	render(<CurrencyCard baseCurrency="EUR" exchangeRates={incompleteData} />)
	const screenshot = await generateImage(GENERATE_IMAGE_OPTIONS)
	expect(screenshot).toMatchImageSnapshot()
})
