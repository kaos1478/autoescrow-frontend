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
import { asyncGetContractInfo } from '@/redux/slicers/contractInfoSlice'
import { useAppDispatch } from '@/redux/store'
import { setSelectedNetwork } from '@/redux/slicers/networksSlice'

// Types

const Layout: React.FC = ({ children }) => {
  const contract = useAutoEscrowContract()
  const { account, chainId } = useWeb3React()
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(asyncGetContractInfo(contract))
  }, [account, chainId, contract, dispatch])

  useEffect(() => {
    dispatch(setSelectedNetwork(localStorage.getItem('network') || '56'))
  }, [])

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
