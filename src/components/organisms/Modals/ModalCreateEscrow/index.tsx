// External libs
import { ChangeEvent } from 'react'

// Assets

// Componentes
import Frame from '../Commons/Frame'
import Input from '@/components/atoms/Input'
import Typography from '@/components/atoms/Typography'

// Subcomponentes and style

// Services
import useAutoEscrowContract from '@/hooks/useAutoEscrowContract'
import { RootState, useAppDispatch, useAppSelector } from '@/redux/store'
import { setOpen } from '@/redux/slicers/modalsSlice'
import { toWei } from '@/utils/contract'
import { useAsyncValidator } from '@/hooks/useContractMiddleware'

// Types

const ModalCreateEscrow: React.FC = () => {
  const { taxPercentage } = useAppSelector(
    (state: RootState) => state.contractInfo
  )
  const { isOpen, amount } = useAppSelector(
    (state: RootState) => state.modals.newEscrow
  )
  const dispatch = useAppDispatch()
  const contract = useAutoEscrowContract()
  const asyncValidator = useAsyncValidator()

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(
      setOpen({
        modal: 'newEscrow',
        state: {
          amount: parseFloat(e.currentTarget.value),
          isOpen: true
        }
      })
    )
  }

  const handleDangerOnClick = () => {
    dispatch(
      setOpen({
        modal: 'newEscrow',
        state: { amount: 0, isOpen: false }
      })
    )
  }

  const createEscrow = async () => {
    await asyncValidator(
      contract?.createEscrow(toWei(amount)),
      'Waiting the confirmation',
      'Success: escrow sent to the blockchain!'
    )
    dispatch(
      setOpen({
        modal: 'newEscrow',
        state: {
          amount: 0,
          isOpen: false
        }
      })
    )
  }

  return (
    <Frame
      btns={[
        {
          text: 'Confirm',
          handleClick: createEscrow,
          color: 'success'
        },
        {
          text: 'Cancel',
          handleClick: handleDangerOnClick,
          color: 'danger'
        }
      ]}
      isOpen={isOpen}
      title="Create Escrow"
    >
      <Typography as="body1">
        To create a escrows, just inform the amount
      </Typography>
      <Input
        margin="1rem 0rem"
        min={0}
        onChange={handleOnChange}
        placeholder="Amount"
        type="number"
        value={amount}
      />
      <Typography as="body4">
        By clicking on create you are accepting the terms and fees(
        {taxPercentage}%) which may vary according to the time the escrow is
        paid
      </Typography>
    </Frame>
  )
}

export default ModalCreateEscrow
