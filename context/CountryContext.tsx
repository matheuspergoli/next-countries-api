import React from 'react'

export const CountryContext = React.createContext(null)

export function CountryContextProvider({ children }) {
	const [country, setCountry] = React.useState('')

	return (
		<CountryContext.Provider value={{ country, setCountry }}>
			{children}
		</CountryContext.Provider>
	)
}
