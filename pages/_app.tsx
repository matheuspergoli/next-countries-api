import '../styles/globals.css'
import { CountryContextProvider } from '../context/CountryContext'

function MyApp({ Component, pageProps }) {
	return (
		<CountryContextProvider>
			<Component {...pageProps} />
		</CountryContextProvider>
	)
}

export default MyApp
