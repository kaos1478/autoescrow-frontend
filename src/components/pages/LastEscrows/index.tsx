// External libs
import { useEffect } from 'react'
import { useWeb3React } from '@web3-react/core'

// Assets

// Componentes
import EscrowList from '@/components/organisms/EscrowList'
import Page from '@/components/templates/Page'

// Subcomponentes and style

// Services
import useAutoEscrowContract from '@/hooks/useAutoEscrowContract'
import { RootState, useAppDispatch, useAppSelector } from '@/redux/store'
import { asyncGetLastEscrows } from '@/redux/slicers/lastEscrowsSlice'

// Types

const LastEscrowsPage: React.FC = () => {
  const contract = useAutoEscrowContract()
  const { account, chainId } = useWeb3React()
  const dispatch = useAppDispatch()
  const escrows = useAppSelector(
    (state: RootState) => state.lastEscrows.escrows
  )
  const fetching = useAppSelector(
    (state: RootState) => state.lastEscrows.fetching
  )

  useEffect(() => {
    dispatch(asyncGetLastEscrows(contract))
  }, [account, chainId, contract, dispatch])

  return (
    <Page title="Last Escrows" loading={fetching}>
      <EscrowList escrows={escrows} status="open" />
    </Page>
  )
}

export default LastEscrowsPage
