// External libs
import { useState } from 'react'

// Assets

// Componentes
import EscrowList from '@/components/organisms/EscrowList'
import Input from '@/components/atoms/Input'
import Page from '@/components/templates/Page'
import Typography from '@/components/atoms/Typography'

// Subcomponentes and style

// Services
import useAutoEscrowContract from '@/hooks/useAutoEscrowContract'
import { asyncGetEscrowByID } from '@/redux/slicers/findByIDSlice'
import { RootState, useAppDispatch, useAppSelector } from '@/redux/store'

// Types

const FindByID: React.FC = () => {
  const contract = useAutoEscrowContract()
  const [timeoutID, setTimeoutID] = useState<any>()
  const dispatch = useAppDispatch()
  const { escrows, error } = useAppSelector(
    (state: RootState) => state.findByID
  )

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
      onChange={e => handleOnChange(e.currentTarget.value)}
      placeholder="Search ID"
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
      {
        <Typography as="heading2" align="center" marginTop="2rem">
          {error}
        </Typography>
      }
    </Page>
  )
}

export default FindByID
