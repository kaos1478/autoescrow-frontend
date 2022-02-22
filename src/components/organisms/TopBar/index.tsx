// External libs
import { useMemo } from 'react'
import { useWeb3React } from '@web3-react/core'

// Assets

// Componentes
import Button from '@/components/atoms/Button'
import TopBarMenu from '@/components/organisms/TopBar/TopBarMenu'
import { colorVariants } from '@/components/atoms/Button/styles'

// Subcomponentes and style
import * as Styled from './styles'

// Services
import useInjectedConnector from '@/hooks/useInjectedConnector'
import { Ellipse } from '@/utils/text'
import TopBarNetworks from './TopBarNetworks'

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
      <Styled.RightContent>
        <TopBarMenu />
        <TopBarNetworks />
        <Button color={buttonConfig[connectionStatus].color} onClick={connect}>
          {buttonConfig[connectionStatus].text}
        </Button>
      </Styled.RightContent>
    </Styled.Container>
  )
}

export default TopBar
