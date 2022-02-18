import GlobalStyles from '@/styles/global'
import Layout from '@/components/templates/Layout'
import theme from '@/styles/theme'
import useLibrary from '@/hooks/useLibrary'
import { ModalCreateEscrow } from '@/components/organisms/Modals'
import { Provider } from 'react-redux'
import { store } from '@/redux/store'
import { ThemeProvider } from 'styled-components'
import { ToastContainer } from 'react-toastify'
import { Web3ReactProvider } from '@web3-react/core'
import type { AppProps } from 'next/app'

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
