// External libs
import { toast } from 'react-toastify'
import { useWeb3React } from '@web3-react/core'

// Assets

// Componentes
import Button from '@/components/atoms/Button'
import SideBarMenu from '@/components/organisms/SideBar/SideBarMenu'
import Typography from '@/components/atoms/Typography'

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
        SelfEscrow
      </Typography>
      <Typography as="heading1" marginTop="2rem" marginBottom="2rem">
        SE
      </Typography>
      <Button color="default" marginBottom="2rem" onClick={handleOnClick}>
        New Escrow
      </Button>
      <Button
        color="defaultReverse"
        withoutMinWidth
        onClick={handleOnClick}
        padding="0 0.5rem"
        marginBottom="1rem"
      >
        New
      </Button>
      <SideBarMenu />
    </Styled.Container>
  )
}

export default SideBar
