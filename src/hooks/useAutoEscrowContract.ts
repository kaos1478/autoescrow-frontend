import AUTOESCROW_ABI from '@/abis/AutoEscrow.json'
import { useAppSelector } from '@/redux/store'
import useContract from './useContract'

export default function useAutoEscrowContract() {
  const { selected, networks } = useAppSelector(state => state.networks)

  const networkActive = networks.find(network => network.value === selected)

  return useContract(AUTOESCROW_ABI, networkActive?.contractAddress || '')
}
