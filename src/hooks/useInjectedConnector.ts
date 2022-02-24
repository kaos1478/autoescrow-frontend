import { InjectedConnector } from '@web3-react/injected-connector'
import { NETWORKS } from '@/constants'

const useInjectedConnector = new InjectedConnector({
  supportedChainIds: NETWORKS
})

export default useInjectedConnector
