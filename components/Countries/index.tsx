import React from 'react'
import Country from './Country'
import { CountryContext } from '../../context/CountryContext'
import { RegionContext } from '../../context/RegionContext'

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
	const { region } = React.useContext(RegionContext)
	const [selectedRegion, setSelectedRegion] = React.useState([])
	const { country } = React.useContext(CountryContext)
	const [searchedCountry, setSearchedCountry] = React.useState([])

	React.useEffect(() => {
		async function fetchRegion() {
			const response = await fetch(
				`https://restcountries.com/v3.1/region/${region}`
			)
			const data = await response.json()

			if (data.status !== 404) {
				setSelectedRegion(data)
			}
		}
		fetchRegion()
	}, [region])

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
				{selectedRegion.length > 0 &&
					selectedRegion.map((country: CountryData, index: number) => (
						<Country key={index} country={country} />
					))}
				{data.map((country: CountryData, index: number) => (
					<Country key={index} country={country} />
				))}
			</main>
		</>
	)
}

export default Countries
