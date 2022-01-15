import AUTOESCROW_ABI from '@/abis/AutoEscrow.json'
import useContract from './useContract'

export default function useAutoEscrowContract(tokenAddress: string) {
  return useContract(tokenAddress, AUTOESCROW_ABI)
}
