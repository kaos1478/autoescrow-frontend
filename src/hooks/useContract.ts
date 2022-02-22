import { Contract } from '@ethersproject/contracts'
import { useMemo } from 'react'
import { useWeb3React } from '@web3-react/core'

export default function useContract<T extends Contract = Contract>(
  ABI: any,
  address: string
): T | null {
  const { library, account, chainId } = useWeb3React()

  return useMemo(() => {
    if (!address || !ABI || !library || !chainId) {
      return null
    }

    try {
      return new Contract(address, ABI, library.getSigner(account))
    } catch (error) {
      console.error('Failed To Get Contract', error)

      return null
    }
  }, [address, ABI, library, account, chainId]) as T
}
