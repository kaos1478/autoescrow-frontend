// External libs

// Assets

// Componentes

// Subcomponentes and style
import Input from '@/components/atoms/Input'
import Typography from '@/components/atoms/Typography'
import useAutoEscrowContract from '@/hooks/useAutoEscrowContract'
import { setOpen } from '@/redux/slicers/modalsSlice'
import { RootState, useAppDispatch, useAppSelector } from '@/redux/store'
import { toWei } from '@/utils/contract'
import { ChangeEvent } from 'react'
import Frame from '../Commons/Frame'
import { useAsyncValidator } from '@/hooks/useContractMiddleware'

// Services

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
      'Success: escrow sent to the blockchain!',
      'Waiting the confirmation'
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
      title="Create Escrow"
      isOpen={isOpen}
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
    >
      <Typography as="body1">
        To create a escrows, just inform the amount
      </Typography>
      <Input
        placeholder="Amount"
        margin="1rem 0rem"
        type="number"
        min={0}
        onChange={handleOnChange}
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
