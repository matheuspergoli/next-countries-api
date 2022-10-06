import Head from 'next/head'
import Title from '../components/Title'
import Countries from '../components/Countries'
import Search from '../components/Search'

export async function getStaticProps() {
	const response = await fetch('https://restcountries.com/v3.1/all')
	const data = await response.json()

	return {
		props: { data }
	}
}

function Home({ data }) {
	return (
		<>
			<Head>
				<title>Countries API</title>
				<meta
					name='description'
					content='Next Countries API - Search for every country in our site, check information about your desired country, we provide all the information you will need.'
				/>
			</Head>
			<Title />
			<Search />
			<Countries data={data} />
		</>
	)
}

export default Home
