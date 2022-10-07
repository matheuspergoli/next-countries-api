import '../styles/globals.css'
import { CountryContextProvider } from '../context/CountryContext'
import { RegionContextProvider } from '../context/RegionContext'

function MyApp({ Component, pageProps }) {
	return (
		<CountryContextProvider>
			<RegionContextProvider>
				<Component {...pageProps} />
			</RegionContextProvider>
		</CountryContextProvider>
	)
}

export default MyApp
