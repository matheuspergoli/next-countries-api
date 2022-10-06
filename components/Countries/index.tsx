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
	const { country } = React.useContext(CountryContext)
	const [searchedCountry, setSearchedCountry] = React.useState([])

	React.useEffect(() => {
		async function fetchCountry() {
			const response = await fetch(
				`https://restcountries.com/v3.1/name/${country}`
			)
			const data = await response.json()

			if (data.status !== 404) {
				setSearchedCountry(data)
			}
		}
		fetchCountry()
	}, [country])

	return (
		<>
			{searchedCountry.length > 0 && (
				<section className='flex flex-wrap justify-evenly items-center gap-10 p-5'>
					{searchedCountry.map((country: CountryData, index: number) => (
						<Country key={index} country={country} />
					))}
				</section>
			)}
			<main className='flex flex-wrap justify-evenly items-center gap-10 p-5'>
				{data.map((country: CountryData, index: number) => (
					<Country key={index} country={country} />
				))}
			</main>
		</>
	)
}

export default Countries
