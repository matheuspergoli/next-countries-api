import React from 'react'

export const RegionContext = React.createContext(null)

export function RegionContextProvider({ children }) {
	const [region, setRegion] = React.useState('')

	return (
		<RegionContext.Provider value={{ region, setRegion }}>
			{children}
		</RegionContext.Provider>
	)
}
