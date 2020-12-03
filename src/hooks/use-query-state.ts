import { useMemo } from 'react'
import { useLocation, useHistory } from 'react-router-dom'
import * as queryString from 'query-string'
import pick from 'lodash/pick'
import pickBy from 'lodash/pickBy'
import has from 'lodash/has'

// this might be overkill but I had it written
export const useQueryState = <T>(defaultValues: T): [T, (newValues: Partial<T>) => void] => {
	const location = useLocation()
	const history = useHistory()

	const controlledQueryParams = useMemo(
		() => ({
			...defaultValues,
			...pick(queryString.parse(location.search), Object.keys(defaultValues)),
		}),
		[defaultValues, location.search]
	)

	const updateQueryParams = (newValues: Partial<T>) => {
		const queryParams = queryString.parse(location.search)
		const updatedQueryParams = pickBy(
			{
				...queryParams,
				...newValues,
			},
			// @ts-ignore
			(value: any, key: keyof T) => !has(defaultValues, key) || defaultValues[key] !== value
		)

		const updatedQueryString = `?${queryString.stringify(updatedQueryParams)}`

		if (updatedQueryString !== location.search) {
			history.push(`${location.pathname}${updatedQueryString}${location.hash}`)
		}
	}

	return [controlledQueryParams, updateQueryParams]
}
