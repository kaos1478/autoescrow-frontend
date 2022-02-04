// External libs

// Assets

// Componentes

// Subcomponentes and style
import Input from '@/components/atoms/Input'
import Typography from '@/components/atoms/Typography'
import { RootState, useAppSelector } from '@/redux/store'
import Frame from '../Commons/Frame'

// Services

// Types

const ModalCreateEscrow: React.FC = () => {
  const taxPercentage = useAppSelector(
    (state: RootState) => state.contractInfo.taxPercentage
  )

  return (
    <Frame>
      <Typography as="body1">
        To create a escrows, just inform the amount
      </Typography>
      <Input placeholder="Amount" margin="1rem 0rem" />
      <Typography as="body4">
        By clicking on create you are accepting the terms and fees(
        {taxPercentage}%) which may vary according to the time the escrow is
        paid
      </Typography>
    </Frame>
  )
}

export default ModalCreateEscrow
