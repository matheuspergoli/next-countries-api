import Head from 'next/head'
import Title from '../components/Title'
import Countries from '../components/Countries'
import Search from '../components/Search'

export async function getServerSideProps() {
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
			</Head>
			<Title />
			<Search />
			<Countries data={data} />
		</>
	)
}

export default Home
