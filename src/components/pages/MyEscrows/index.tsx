// External libs

// Assets

// Componentes
import Page from '@/components/templates/Page'
import useAutoEscrowContract from '@/hooks/useAutoEscrowContract'
import { asyncGetMyEscrows } from '@/redux/slicers/myEscrowsSlice'
import { useAppDispatch } from '@/redux/store'
import { useWeb3React } from '@web3-react/core'
import { useEffect } from 'react'

// Subcomponentes and style

// Services

// Types

const MyEscrows: React.FC = () => {
  const contract = useAutoEscrowContract()
  const { account, chainId } = useWeb3React()
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(asyncGetMyEscrows(contract))
  }, [account, chainId, contract, dispatch])

  return <Page title="My Escrows"></Page>
}

export default MyEscrows
