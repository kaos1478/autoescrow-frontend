import GlobalStyles from '@/styles/global'
import { ThemeProvider } from 'styled-components'
import { Web3ReactProvider } from '@web3-react/core'
import type { AppProps } from 'next/app'

import useLibrary from '@/hooks/useLibrary'
import theme from '@/styles/theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Web3ReactProvider getLibrary={useLibrary}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        <GlobalStyles />
      </ThemeProvider>
    </Web3ReactProvider>
  )
}
export default MyApp
