// External libs

// Assets

// Componentes
import Input from '@/components/atoms/Input'
import EscrowList from '@/components/organisms/EscrowList'
import Page from '@/components/templates/Page'
import useAutoEscrowContract from '@/hooks/useAutoEscrowContract'
import { asyncGetEscrowByID } from '@/redux/slicers/findByIDSlice'
import { RootState, useAppDispatch, useAppSelector } from '@/redux/store'
import { useState } from 'react'

// Subcomponentes and style

// Services

// Types

const FindByID: React.FC = () => {
  const contract = useAutoEscrowContract()
  const [timeoutID, setTimeoutID] = useState<any>()
  const dispatch = useAppDispatch()
  const escrows = useAppSelector((state: RootState) => state.findByID.escrows)

  const handleOnChange = (e: string) => {
    clearTimeout(timeoutID)
    e &&
      setTimeoutID(
        setTimeout(async () => {
          dispatch(asyncGetEscrowByID(contract, e))
        }, 1000)
      )
  }
  const addons = () => (
    <Input
      placeholder="Search ID"
      onChange={e => handleOnChange(e.currentTarget.value)}
      type="number"
    />
  )

  return (
    <Page title="Find by ID" addons={addons}>
      {escrows.opens && <EscrowList escrows={escrows.opens} status="open" />}
      {escrows.paids && <EscrowList escrows={escrows.paids} status="paid" />}
      {escrows.disputes && (
        <EscrowList escrows={escrows.disputes} status="dispute" />
      )}
    </Page>
  )
}

export default FindByID
