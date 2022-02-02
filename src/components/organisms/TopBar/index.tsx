// External libs

// Assets

// Componentes
import Button from '@/components/atoms/Button'
import { colorVariants } from '@/components/atoms/Button/styles'
import TopBarMenu from '@/components/organisms/TopBar/TopBarMenu'
import useInjectedConnector from '@/hooks/useInjectedConnector'
import { Ellipse } from '@/utils/text'
import { useWeb3React } from '@web3-react/core'
import { useMemo } from 'react'

// Subcomponentes and style
import * as Styled from './styles'

// Services

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

  return (
    <Styled.Container>
      <TopBarMenu />
      <Button color={buttonConfig[connectionStatus].color} onClick={connect}>
        {buttonConfig[connectionStatus].text}
      </Button>
    </Styled.Container>
  )
}

export default TopBar
