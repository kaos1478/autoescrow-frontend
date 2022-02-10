// External libs
import { useEffect, useState } from 'react'
import { useWeb3React } from '@web3-react/core'

// Assets

// Componentes
import Select from '@/components/atoms/Select'
import EscrowList from '@/components/organisms/EscrowList'
import Page from '@/components/templates/Page'
import useAutoEscrowContract from '@/hooks/useAutoEscrowContract'
import { asyncGetMyEscrows } from '@/redux/slicers/myEscrowsSlice'
import { RootState, useAppDispatch, useAppSelector } from '@/redux/store'
import { IGetEscrowsBySender } from '@/types/autoEscrowContractTypes'
import Input from '@/components/atoms/Input'

// Subcomponentes and style

// Services

// Types

const MyEscrows: React.FC = () => {
  const contract = useAutoEscrowContract()
  const { account, chainId } = useWeb3React()
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
  const escrowsStatus = [
    { value: 'opensAsSender', text: 'Opens As Sender' },
    { value: 'paidsAsPayer', text: 'Paids As Payer' },
    { value: 'paidsAsSender', text: 'Paids As Sender' },
    { value: 'disputesAsPayer', text: 'Disputes As Payer' },
    { value: 'disputesAsSender', text: 'Disputes As Sender' }
  ]

  const selectHandleChange = (e: any) => {
    setStatusFilter(e.currentTarget.value)
  }

  const findEscrows = (escrow: any): boolean =>
    escrow.id.toString() === inputText

  useEffect(() => {
    dispatch(asyncGetMyEscrows(contract))
  }, [account, chainId, contract, dispatch])

  const addons = () => (
    <div>
      <Input
        placeholder="Search ID"
        onChange={e => setInputText(e.currentTarget.value)}
        margin="0 0.5rem 0 0"
      />
      <Select handleChange={selectHandleChange} options={escrowsStatus} />
    </div>
  )

  return (
    <Page title="My Escrows" loading={fetching} addons={addons}>
      <EscrowList escrows={inputText ? escrows.filter(findEscrows) : escrows} />
    </Page>
  )
}

export default MyEscrows
