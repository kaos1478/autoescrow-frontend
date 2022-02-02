// External libs

// Assets

// Componentes
import EscrowList from '@/components/organisms/EscrowList'
import Page from '@/components/templates/Page'
import useAutoEscrowContract from '@/hooks/useAutoEscrowContract'
import { useWeb3React } from '@web3-react/core'
import { useEffect, useState } from 'react'

// Subcomponentes and style

// Services

// Types

const LastEscrowsPage: React.FC = () => {
  const contract = useAutoEscrowContract()
  const [lastEscrows, setLastEscrows] = useState<[]>([])
  const { account } = useWeb3React()

  const getLastEscrows = async () => {
    try {
      const resp = await contract?.getLastEscrows(10)
      setLastEscrows(resp)
    } catch {
      console.error('Ops!')
    }
  }

  useEffect(() => {
    getLastEscrows()
  }, [account])

  return (
    <Page title="Last Escrows">
      <EscrowList escrows={lastEscrows} />
    </Page>
  )
}

export default LastEscrowsPage
