import GlobalStyles from '@/styles/global'
import { ThemeProvider } from 'styled-components'
import { Web3ReactProvider } from '@web3-react/core'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify'

import useLibrary from '@/hooks/useLibrary'
import theme from '@/styles/theme'
import Layout from '@/components/templates/Layout'
import { store } from '@/redux/store'
import { ModalCreateEscrow } from '@/components/organisms/Modals'

import 'react-toastify/dist/ReactToastify.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Web3ReactProvider getLibrary={useLibrary}>
        <ThemeProvider theme={theme}>
          <ModalCreateEscrow />
          <Layout>
            <Component {...pageProps} />
          </Layout>
          <ToastContainer theme="dark" />
          <GlobalStyles />
        </ThemeProvider>
      </Web3ReactProvider>
    </Provider>
  )
}
export default MyApp
