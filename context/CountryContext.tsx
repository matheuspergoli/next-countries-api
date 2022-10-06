import React from 'react'

export const CountryContext = React.createContext(null)

export function CountryContextProvider({ children }) {
	const [region, setRegion] = React.useState('')

	return (
		<CountryContext.Provider value={{ region, setRegion }}>
			{children}
		</CountryContext.Provider>
	)
}
