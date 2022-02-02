import { InjectedConnector } from '@web3-react/injected-connector'

const useInjectedConnector = new InjectedConnector({
  supportedChainIds: [80001]
})

export default useInjectedConnector
