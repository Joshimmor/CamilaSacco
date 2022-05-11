import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { AnimatePresence } from "framer-motion"
Context}
function MyApp({ Component, pageProps }: AppProps) {
  return(
    <AnimatePresence>
       <Component {...pageProps} />
    </AnimatePresence>
  )
}

export default MyApp
