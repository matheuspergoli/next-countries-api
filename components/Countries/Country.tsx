import React from 'react'
import Image from 'next/image'

interface CountryData {
	country: {
		capital: []
		region: string
		population: number
		flags: { png: string }
		name: { common: string; official: string }
	}
}

function Country({ country }: CountryData) {
	const src = country.flags.png

	return (
		<section className='w-country-card h-country-card shadow-md rounded-md border'>
			<figure>
				<Image
					className='rounded-t-md'
					loader={() => src}
					src={src}
					alt={`${country.name.common} Flag`}
					width={300}
					height={200}
					unoptimized
					loading='lazy'
				/>
			</figure>
			<div className='p-4'>
				<h1 className='mb-2 font-bold text-xl'>{country.name.common}</h1>
				<p className='font-semibold'>
					Population: <span className='font-normal'>{country.population}</span>
				</p>
				<p className='font-semibold'>
					Region: <span className='font-normal'>{country.region}</span>
				</p>
				<p className='font-semibold'>
					Capital: <span className='font-normal'>{country.capital}</span>
				</p>
			</div>
		</section>
	)
}

export default Country
