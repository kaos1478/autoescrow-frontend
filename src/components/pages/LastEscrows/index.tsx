// External libs
import { useEffect, memo, useState } from 'react'
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
  const [intervalID, setIntervalID] = useState<any>()
  const { account, chainId } = useWeb3React()
  const dispatch = useAppDispatch()
  const escrows = useAppSelector(
    (state: RootState) => state.lastEscrows.escrows
  )
  const fetching = useAppSelector(
    (state: RootState) => state.lastEscrows.fetching
  )

  useEffect(() => {
    clearInterval(intervalID)
    dispatch(asyncGetLastEscrows(contract))
    setIntervalID(
      setInterval(async () => {
        contract && (await dispatch(asyncGetLastEscrows(contract)))
      }, 20000)
    )
  }, [contract, account, chainId, dispatch])

  return (
    <Page title="Last Escrows" loading={fetching}>
      <EscrowList escrows={escrows} status="open" />
    </Page>
  )
}

export default memo(LastEscrowsPage)
