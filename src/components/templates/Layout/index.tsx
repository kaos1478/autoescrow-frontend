// External libs
import { useEffect } from 'react'
import { useWeb3React } from '@web3-react/core'

// Assets

// Componentes
import SideBar from '@/components/organisms/SideBar'
import TopBar from '@/components/organisms/TopBar'

// Subcomponentes and style
import * as Styled from './styles'

// Services
import useAutoEscrowContract from '@/hooks/useAutoEscrowContract'
import useInjectedConnector from '@/hooks/useInjectedConnector'
import { asyncGetContractInfo } from '@/redux/slicers/contractInfoSlice'
import { useAppDispatch } from '@/redux/store'

// Types

const Layout: React.FC = ({ children }) => {
  const contract = useAutoEscrowContract()
  const { account, chainId } = useWeb3React()
  const dispatch = useAppDispatch()

  const switchNetworkMumbai = async () => {
    const provider = await useInjectedConnector.getProvider()
    try {
      await provider.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: '0x13881' }]
      })
    } catch (error: any) {
      if (error.code === 4902) {
        try {
          await provider.request({
            method: 'wallet_addEthereumChain',
            params: [
              {
                chainId: '0x13881',
                chainName: 'Mumbai',
                rpcUrls: ['https://rpc-mumbai.matic.today'],
                nativeCurrency: {
                  name: 'Matic',
                  symbol: 'Matic',
                  decimals: 18
                },
                blockExplorerUrls: ['https://explorer-mumbai.maticvigil.com']
              }
            ]
          })
        } catch (error: any) {
          alert(error.message)
        }
      }
    }
  }

  useEffect(() => {
    switchNetworkMumbai()
    dispatch(asyncGetContractInfo(contract))
  }, [account, chainId, contract, dispatch])

  return (
    <Styled.Container>
      <SideBar />
      <Styled.Content>
        <TopBar />
        {children}
      </Styled.Content>
    </Styled.Container>
  )
}

export default Layout
