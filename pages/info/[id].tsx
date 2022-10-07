import Head from 'next/head'
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
			</Head>
			<InfoCountry data={data} />
		</>
	)
}

export default CountryInformation
