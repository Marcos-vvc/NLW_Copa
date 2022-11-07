import type { AppProps } from 'next/app'
import '../styles/global.css'

 function Myapp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default Myapp
