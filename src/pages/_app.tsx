import GlobalStyles from '@/styles/global'
import { ThemeProvider } from 'styled-components'
import { Web3ReactProvider } from '@web3-react/core'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'

import useLibrary from '@/hooks/useLibrary'
import theme from '@/styles/theme'
import Layout from '@/components/templates/Layout'
import { store } from '@/redux/store'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Web3ReactProvider getLibrary={useLibrary}>
        <ThemeProvider theme={theme}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
          <GlobalStyles />
        </ThemeProvider>
      </Web3ReactProvider>
    </Provider>
  )
}
export default MyApp
