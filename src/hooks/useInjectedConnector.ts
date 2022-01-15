import { InjectedConnector } from '@web3-react/injected-connector'

const useInjectedConnector = new InjectedConnector({
  supportedChainIds: [1, 3, 4, 5, 42, 137, 80001]
})

export default useInjectedConnector
