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

// Subcomponentes and style

// Services

// Types

const MyEscrows: React.FC = () => {
  const contract = useAutoEscrowContract()
  const { account, chainId } = useWeb3React()
  const [statusFilter, setStatusFilter] =
    useState<keyof IGetEscrowsBySender>('opensAsSender')
  const dispatch = useAppDispatch()
  const escrows = useAppSelector(
    (state: RootState) => state.myEscrows.escrows[statusFilter]
  )
  const fetching = useAppSelector(
    (state: RootState) => state.lastEscrows.fetching
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

  useEffect(() => {
    dispatch(asyncGetMyEscrows(contract))
  }, [account, chainId, contract, dispatch])

  const test = () => (
    <Select handleChange={selectHandleChange} options={escrowsStatus} />
  )

  return (
    <Page title="My Escrows" loading={fetching} addons={test}>
      <EscrowList escrows={escrows} />
    </Page>
  )
}

export default MyEscrows
