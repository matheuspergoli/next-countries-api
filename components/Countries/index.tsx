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
	const [searchedCountry, setSearchedCountry] = React.useState([])

	React.useEffect(() => {
		async function fetchCountry() {
			if (region.length > 3) {
				const response = await fetch(
					`https://restcountries.com/v3.1/name/${region}`
				)
				const data = await response.json()
				setSearchedCountry(data)
			}
		}
		fetchCountry()
	}, [region])

	return (
		<>
			<section className='flex items-center justify-center'>
				{searchedCountry &&
					searchedCountry.map((country: CountryData, index: number) => (
						<Country key={index} country={country} />
					))}
			</section>
			<main className='flex flex-wrap justify-evenly items-center gap-10 p-5'>
				{data.map((country: CountryData, index: number) => (
					<Country key={index} country={country} />
				))}
			</main>
		</>
	)
}

export default Countries
