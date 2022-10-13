import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import Layout from '../src/components/layout/Layout'
import type { AppProps } from 'next/app'

function MyApp({
  Component,
  pageProps,
}: AppProps) {
  return (
    <ChakraProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  )
}

export default MyApp
