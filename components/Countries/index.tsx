import React from 'react'
import Country from './Country'
import { CountryContext } from '../../context/CountryContext'

interface CountryData {
	capital: []
	region: string
	population: number
	flags: { png: string }
	name: {
		common: string
		official: string
	}
}

function Countries({ data }) {
	const { region } = React.useContext(CountryContext)

	return (
		<main className='flex flex-wrap justify-evenly items-center gap-10 p-5'>
			{data.map((country: CountryData, index: number) => (
				<Country key={index} country={country} />
			))}
		</main>
	)
}

export default Countries
