// External libs
import { toast } from 'react-toastify'
import { useMemo } from 'react'
import { useWeb3React } from '@web3-react/core'

// Assets

// Componentes
import Button from '@/components/atoms/Button'
import { colorVariants } from '@/components/atoms/Button/styles'
import TopBarMenu from '@/components/organisms/TopBar/TopBarMenu'
import useInjectedConnector from '@/hooks/useInjectedConnector'
import { useAppDispatch } from '@/redux/store'
import { Ellipse } from '@/utils/text'

// Subcomponentes and style
import * as Styled from './styles'

// Services
import { setOpen } from '@/redux/slicers/modalsSlice'

// Types
interface IConfig {
  text: string
  color: keyof typeof colorVariants
}
interface IButtonConfig {
  logged: IConfig
  notLogged: IConfig
  wrongNetwork: IConfig
}

const TopBar: React.FC = () => {
  const { activate, account, deactivate, error } = useWeb3React()
  const dispatch = useAppDispatch()

  const connect = async () => {
    try {
      if (account) {
        deactivate()
      } else {
        await activate(useInjectedConnector)
      }
    } catch (err) {
      console.log(err)
    }
  }

  const connectionStatus = useMemo(() => {
    if (account && !error) {
      return 'logged'
    } else if (!account && !error) {
      return 'notLogged'
    } else {
      return 'wrongNetwork'
    }
  }, [account, error])

  const buttonConfig: IButtonConfig = {
    logged: {
      text: Ellipse(account || ''),
      color: 'default'
    },
    notLogged: {
      text: 'Connect Wallet',
      color: 'defaultReverse'
    },
    wrongNetwork: {
      text: 'Wrong Network',
      color: 'warning'
    }
  }

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
      <Styled.LeftContent>
        <Button
          color="defaultReverse"
          withoutMinWidth
          onClick={handleOnClick}
          padding="0 0.5rem"
        >
          New
        </Button>
      </Styled.LeftContent>
      <Styled.RightContent>
        <TopBarMenu />
        <Button color={buttonConfig[connectionStatus].color} onClick={connect}>
          {buttonConfig[connectionStatus].text}
        </Button>
      </Styled.RightContent>
    </Styled.Container>
  )
}

export default TopBar
