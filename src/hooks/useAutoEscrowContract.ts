import AUTOESCROW_ABI from '@/abis/AutoEscrow.json'
import useContract from './useContract'

export default function useAutoEscrowContract(
  tokenAddress: string = '0x3263164d5D55CBd4D5F5b9C4A0F2c59BF82ac119'
) {
  return useContract(AUTOESCROW_ABI, tokenAddress)
}
