import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { BsArrowLeft as Arrow } from 'react-icons/bs'

interface Country {
	data: [
		{
			tld: [1]
			capital: [1]
			region: string
			subregion: string
			population: number
			flags: { png: string }
			name: { official: string }
		}
	]
}

function InfoCountry({ data }: Country) {
	const src = data[0].flags.png

	return (
		<>
			<Link href='/' passHref>
				<button className='flex items-center gap-3 m-5 p-2 w-fit shadow-md border rounded-md'>
					<Arrow className='text-xl' />
					Back
				</button>
			</Link>
			<main className='p-5 sm:flex sm:items-start sm:gap-10'>
				<figure className='w-full sm:w-96'>
					<Image
						className='rounded-md'
						src={src}
						loader={() => src}
						alt={`${data[0].name.official} Flag`}
						width={100}
						height={100}
						layout='responsive'
						unoptimized
						priority
					/>
				</figure>
				<section className='mt-10 sm:mt-0'>
					<h1 className='mb-5 text-4xl font-bold'>{data[0].name.official}</h1>
					<p className='text-xl font-semibold'>
						Native Name:{' '}
						<span className='font-normal'>{data[0].name.official}</span>
					</p>
					<p className='text-xl font-semibold'>
						Population:{' '}
						<span className='font-normal'>{data[0].population}</span>
					</p>
					<p className='text-xl font-semibold'>
						Region: <span className='font-normal'>{data[0].region}</span>
					</p>
					<p className='text-xl font-semibold'>
						Sub Region: <span className='font-normal'>{data[0].subregion}</span>
					</p>
					<p className='text-xl font-semibold'>
						Capital: <span className='font-normal'>{data[0].capital[0]}</span>
					</p>
					<p className='text-xl font-semibold'>
						Top Level Domain{' '}
						<span className='font-normal'>{data[0].tld[0]}</span>
					</p>
				</section>
			</main>
		</>
	)
}

export default InfoCountry
