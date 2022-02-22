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
import Input from '@/components/atoms/Input'
import Button from '@/components/atoms/Button'

// Types

const Admin: React.FC = () => {
  const contract = useAutoEscrowContract()
  const [infoAsOwner, setInfoAsOwner] = useState<any>({})
  const [tax, setTax] = useState<string>('')

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
  const setTaxPercentage = async () => {
    await contract?.setTaxPercentage(tax)
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
      <br />
      <Input
        onChange={e => setTax(e.currentTarget.value)}
        type="number"
        min={0}
        max={100}
        value={tax}
      />
      <Button color="default" onClick={setTaxPercentage}>
        setTax
      </Button>
      <br />
      <button onClick={execToggleActive}>execToggleActive</button>
      <br />
      <button onClick={execAbandonedCollector}>execAbandonedCollector</button>
      <br />
      <button onClick={execGarbageCollector}>execGarbageCollector</button>
      <br />
      <button onClick={execTaxCollector}>execTaxCollector</button>
    </Page>
  )
}

export default Admin
