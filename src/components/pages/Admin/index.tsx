// External libs
import { useEffect, useState } from 'react'

// Assets

// Componentes
import Page from '@/components/templates/Page'
import Typography from '@/components/atoms/Typography'

// Subcomponentes and style

// Services
import useAutoEscrowContract from '@/hooks/useAutoEscrowContract'
import { toEther } from '@/utils/contract'

// Types

const Admin: React.FC = () => {
  const contract = useAutoEscrowContract()
  const [infoAsOwner, setInfoAsOwner] = useState<any>({})

  const getContractInfoAsOwner = async () => {
    const info = await contract?.getContractInfoAsOwner()
    setInfoAsOwner({ ...info })
  }

  const execToggleActive = async () => {
    await contract?.execToggleActive()
  }
  const execAbandonedCollector = async () => {
    await contract?.execAbandonedCollector()
  }
  const execGarbageCollector = async () => {
    await contract?.execGarbageCollector()
  }
  const execTaxCollector = async () => {
    await contract?.execTaxCollector()
  }

  useEffect(() => {
    getContractInfoAsOwner()
  }, [contract])

  return (
    <Page title="Admin">
      <Typography as="body1">
        Tax Colected: {toEther(parseInt(infoAsOwner.taxCollected))}
      </Typography>
      <br />
      <Typography as="body1">
        Escrows opens in Deadline: {parseInt(infoAsOwner.openDeadlineLenght)}
      </Typography>
      <br />
      <Typography as="body1">
        Escrows paids in Deadline: {parseInt(infoAsOwner.paidDeadlineLenght)}
      </Typography>
      <br />
      <Typography as="body1">New Owner: {infoAsOwner.newOwner}</Typography>
      <button onClick={execToggleActive}>execToggleActive</button>
      <button onClick={execAbandonedCollector}>execAbandonedCollector</button>
      <button onClick={execGarbageCollector}>execGarbageCollector</button>
      <button onClick={execTaxCollector}>execTaxCollector</button>
    </Page>
  )
}

export default Admin
