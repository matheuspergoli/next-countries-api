import React from 'react'
import { FaSearch as SearchIcon } from 'react-icons/fa'
import { CountryContext } from '../../context/CountryContext'
import { RegionContext } from '../../context/RegionContext'

function Search() {
	const { country, setCountry } = React.useContext(CountryContext)
	const { region, setRegion } = React.useContext(RegionContext)

	function searchCountry({ target }) {
		setCountry(target.value)
	}

	function sortByRegion({ target }) {
		setRegion(target.value)
	}

	return (
		<section className='m-5 sm:flex sm:items-center sm:justify-around'>
			<div className='flex items-center gap-2 p-4 w-full rounded-md shadow-md border sm:max-w-xs'>
				<SearchIcon />
				<input
					className='outline-none w-full'
					type='text'
					value={country}
					onChange={searchCountry}
					placeholder='Search for a country...'
				/>
			</div>
			<form>
				<select
					className='mt-5 p-4 rounded-md border shadow-md outline-none sm:mt-0'
					value={region}
					onChange={sortByRegion}>
					<option defaultValue={''} disabled>
						Filter by Region
					</option>
					<option value='africa'>Africa</option>
					<option value='america'>America</option>
					<option value='asia'>Asia</option>
					<option value='europe'>Europe</option>
					<option value='oceania'>Oceania</option>
				</select>
			</form>
		</section>
	)
}

export default Search
