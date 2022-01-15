import type {
  ExternalProvider,
  JsonRpcFetchFunc
} from '@ethersproject/providers'
import { Web3Provider } from '@ethersproject/providers'

export default function useLibrary(
  provider: ExternalProvider | JsonRpcFetchFunc
) {
  return new Web3Provider(provider)
}
