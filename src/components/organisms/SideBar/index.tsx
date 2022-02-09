// External libs
import { useWeb3React } from '@web3-react/core'
import { toast } from 'react-toastify'

// Assets

// Componentes
import Button from '@/components/atoms/Button'
import Typography from '@/components/atoms/Typography'
import SideBarMenu from '@/components/organisms/SideBar/SideBarMenu'

// Subcomponentes and style
import * as Styled from './styles'

// Services
import { setOpen } from '@/redux/slicers/modalsSlice'
import { useAppDispatch } from '@/redux/store'

// Types

const SideBar: React.FC = () => {
  const dispatch = useAppDispatch()
  const { account, error } = useWeb3React()

  const handleOnClick = () => {
    if (account && !error) {
      dispatch(
        setOpen({
          modal: 'newEscrow',
          state: { amount: 0, isOpen: true }
        })
      )
    } else {
      toast.error('Denied! Check: connected and network')
    }
  }

  return (
    <Styled.Container>
      <Typography as="heading1" marginTop="2rem" marginBottom="2rem">
        AutoEscrow
      </Typography>
      <Typography as="heading1" marginTop="2rem" marginBottom="2rem">
        AE
      </Typography>
      <Button color="default" marginBottom="2rem" onClick={handleOnClick}>
        New Escrow
      </Button>
      <SideBarMenu />
    </Styled.Container>
  )
}

export default SideBar
