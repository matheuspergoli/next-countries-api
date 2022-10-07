import React from 'react'
import Link from 'next/link'
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
				<Link href={`/info/${country.name.common}`}>
					<a>
						<Image
							className='cursor-pointer rounded-t-md'
							loader={() => src}
							src={src}
							alt={`${country.name.common} Flag`}
							width={300}
							height={200}
							unoptimized
							priority
						/>
					</a>
				</Link>
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
