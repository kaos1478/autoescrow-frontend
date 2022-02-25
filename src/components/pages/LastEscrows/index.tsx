// External libs
import { useEffect, memo, useState } from 'react'
import { useWeb3React } from '@web3-react/core'

// Assets
import {
  DollarSignNotSVG,
  DollarSignSVG,
  ShieldSVG,
  ShoppingCartSVG
} from '@/assets/svgs'

// Componentes
import EscrowList from '@/components/organisms/EscrowList'
import Page from '@/components/templates/Page'

// Subcomponentes and style

// Services
import useAutoEscrowContract from '@/hooks/useAutoEscrowContract'
import { asyncGetLastEscrows } from '@/redux/slicers/lastEscrowsSlice'
import { RootState, useAppDispatch, useAppSelector } from '@/redux/store'

// Types
import { ICardListItem } from '@/components/molecules/CardListItem'

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
  const { counter, taxPercentage, openDeadline, paidDeadline } = useAppSelector(
    (state: RootState) => state.contractInfo
  )
  const [cards, setCards] = useState<ICardListItem[]>([])

  useEffect(() => {
    setCards([
      {
        icon: ShoppingCartSVG,
        title: 'Total Escrows',
        value: counter || 0
      },
      {
        icon: ShieldSVG,
        title: 'Current Tax',
        value: `${taxPercentage || 0}%`
      },
      {
        icon: DollarSignNotSVG,
        title: 'Unpaid Deadline',
        value: `${openDeadline || 0} D`
      },
      {
        icon: DollarSignSVG,
        title: 'Paid Deadline',
        value: `${paidDeadline || 0} D`
      }
    ])
  }, [counter, taxPercentage, openDeadline, paidDeadline])

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
    <Page title="Last Escrows" loading={fetching} cards={cards}>
      <EscrowList escrows={escrows} status="open" />
    </Page>
  )
}

export default memo(LastEscrowsPage)
