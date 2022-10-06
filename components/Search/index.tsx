import React from 'react'
import { FaSearch as SearchIcon } from 'react-icons/fa'
import { CountryContext } from '../../context/CountryContext'

function Search() {
	const { region, setRegion } = React.useContext(CountryContext)

	function changeRegion({ target }) {
		setRegion(target.value)
	}

	return (
		<section className='m-5 p-4 rounded-md shadow-md'>
			<div className='flex items-center gap-2'>
				{<SearchIcon />}
				<input
					className='outline-none w-full'
					type='text'
					value={region}
					onChange={changeRegion}
					placeholder='Search for a country...'
				/>
			</div>
			<div></div>
		</section>
	)
}

export default Search
