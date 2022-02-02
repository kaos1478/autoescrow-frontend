import AUTOESCROW_ABI from '@/abis/AutoEscrow.json'
import useContract from './useContract'

export default function useAutoEscrowContract(
  tokenAddress: string = '0xE2Eb5EC66d926A329FEfaF3BB298f8FbD1f45788'
) {
  return useContract(tokenAddress, AUTOESCROW_ABI)
}
