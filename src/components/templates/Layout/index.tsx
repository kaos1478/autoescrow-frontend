// External libs
import { useWeb3React } from '@web3-react/core'
import { useEffect } from 'react'

// Assets

// Componentes
import SideBar from '@/components/organisms/SideBar'
import TopBar from '@/components/organisms/TopBar'

// Subcomponentes and style
import * as Styled from './styles'

// Services
import useAutoEscrowContract from '@/hooks/useAutoEscrowContract'
import { useAppDispatch } from '@/redux/store'
import { asyncGetContractInfo } from '@/redux/slicers/contractInfoSlice'

// Types

const Layout: React.FC = ({ children }) => {
  const contract = useAutoEscrowContract()
  const { account, chainId } = useWeb3React()
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(asyncGetContractInfo(contract))
  }, [account, chainId])

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
