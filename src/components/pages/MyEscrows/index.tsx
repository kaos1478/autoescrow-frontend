// External libs
import { useEffect, useState } from 'react'
import { useWeb3React } from '@web3-react/core'

// Assets

// Componentes
import EscrowList from '@/components/organisms/EscrowList'
import Input from '@/components/atoms/Input'
import Page from '@/components/templates/Page'
import Select from '@/components/atoms/Select'

// Subcomponentes and style

// Services
import useAutoEscrowContract from '@/hooks/useAutoEscrowContract'
import { asyncGetMyEscrows } from '@/redux/slicers/myEscrowsSlice'
import { RootState, useAppDispatch, useAppSelector } from '@/redux/store'

// Types
import { IGetEscrowsBySender } from '@/types/autoEscrowContractTypes'
interface IEscrowStatus {
  value:
    | 'opensAsSender'
    | 'paidsAsPayer'
    | 'paidsAsSender'
    | 'disputesAsPayer'
    | 'disputesAsSender'
  text: string
  status: 'open' | 'paid' | 'dispute'
  active?: boolean
}

const MyEscrows: React.FC = () => {
  const contract = useAutoEscrowContract()
  const { account, chainId } = useWeb3React()
  const [intervalID, setIntervalID] = useState<any>()
  const [statusFilter, setStatusFilter] =
    useState<keyof IGetEscrowsBySender>('opensAsSender')
  const [inputText, setInputText] = useState<string>()
  const dispatch = useAppDispatch()
  const escrows = useAppSelector(
    (state: RootState) => state.myEscrows.escrows[statusFilter]
  )
  const fetching = useAppSelector(
    (state: RootState) => state.myEscrows.fetching
  )
  const escrowsStatus: IEscrowStatus[] = [
    {
      active: true,
      status: 'open',
      text: 'Opens As Sender',
      value: 'opensAsSender'
    },
    {
      active: true,
      status: 'paid',
      text: 'Paids As Payer',
      value: 'paidsAsPayer'
    },
    {
      active: true,
      status: 'paid',
      text: 'Paids As Sender',
      value: 'paidsAsSender'
    },
    {
      active: true,
      status: 'dispute',
      text: 'Disputes As Payer',
      value: 'disputesAsPayer'
    },
    {
      active: true,
      status: 'dispute',
      text: 'Disputes As Sender',
      value: 'disputesAsSender'
    }
  ]

  const selectHandleChange = (e: any) => {
    setStatusFilter(e.currentTarget.value)
  }

  const findEscrows = (escrow: any): boolean =>
    escrow.id.toString() === inputText

  useEffect(() => {
    clearInterval(intervalID)
    dispatch(asyncGetMyEscrows(contract))
    setIntervalID(
      setInterval(async () => {
        contract && (await dispatch(asyncGetMyEscrows(contract)))
      }, 20000)
    )
  }, [contract, account, chainId, dispatch])

  const addons = () => (
    <div>
      <Input
        margin="0 0.5rem 0 0"
        onChange={e => setInputText(e.currentTarget.value)}
        placeholder="Search ID"
      />
      <Select handleChange={selectHandleChange} options={escrowsStatus} />
    </div>
  )

  return (
    <Page title="My Escrows" loading={fetching} addons={addons}>
      <EscrowList
        escrows={inputText ? escrows.filter(findEscrows) : escrows}
        status={
          escrowsStatus.find(status => status.value === statusFilter)?.status ||
          'open'
        }
      />
    </Page>
  )
}

export default MyEscrows
