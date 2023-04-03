import '../styles/globals.css'
import { initializeAxios } from '../utils/axiosUtils'

initializeAxios()
export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
