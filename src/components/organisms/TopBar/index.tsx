// External libs

// Assets

// Componentes
import Button from '@/components/atoms/Button'
import TopBarMenu from '@/components/organisms/TopBar/TopBarMenu'
import useInjectedConnector from '@/hooks/useInjectedConnector'
import { Ellipse } from '@/utils/text'
import { useWeb3React } from '@web3-react/core'

// Subcomponentes and style
import * as Styled from './styles'

// Services

// Types

const TopBar: React.FC = () => {
  const { activate, account, deactivate } = useWeb3React()

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

  return (
    <Styled.Container>
      <TopBarMenu />
      <Button color={account ? 'default' : 'defaultReverse'} onClick={connect}>
        {account ? Ellipse(account) : 'Connect Wallet'}
      </Button>
    </Styled.Container>
  )
}

export default TopBar
