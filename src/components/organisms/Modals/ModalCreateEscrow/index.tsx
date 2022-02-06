// External libs

// Assets

// Componentes

// Subcomponentes and style
import Input from '@/components/atoms/Input'
import Typography from '@/components/atoms/Typography'
import { setOpen } from '@/redux/slicers/modalsSlice'
import { RootState, useAppDispatch, useAppSelector } from '@/redux/store'
import { ChangeEvent } from 'react'
import Frame from '../Commons/Frame'

// Services

// Types

const ModalCreateEscrow: React.FC = () => {
  const taxPercentage = useAppSelector(
    (state: RootState) => state.contractInfo.taxPercentage
  )
  const { isOpen, amount } = useAppSelector(
    (state: RootState) => state.modals.newEscrow
  )
  const dispatch = useAppDispatch()

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(
      setOpen({
        modal: 'newEscrow',
        state: {
          amount: e.currentTarget.value
            ? parseFloat(e.currentTarget.value)
            : '',
          isOpen: true
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
          handleClick: () => {},
          color: 'success'
        },
        {
          text: 'Cancel',
          handleClick: () => {
            dispatch(
              setOpen({
                modal: 'newEscrow',
                state: { amount: '', isOpen: false }
              })
            )
          },
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
