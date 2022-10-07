import Head from 'next/head'
import Title from '../../components/Title'
import InfoCountry from '../../components/InfoCountry'

interface Context {
	query: {
		id: string
	}
}

export async function getServerSideProps(context: Context) {
	const id = context.query.id
	const response = await fetch(`https://restcountries.com/v3.1/name/${id}`)
	const data = await response.json()

	return {
		props: { id, data }
	}
}

function CountryInformation({ id, data }) {
	return (
		<>
			<Head>
				<title>{id}</title>
				<meta
					name='description'
					content='Next Countries API - Search for every country in our site, check information about your desired country, we provide all the information you will need.'
				/>
			</Head>
			<Title />
			<InfoCountry data={data} />
		</>
	)
}

export default CountryInformation
