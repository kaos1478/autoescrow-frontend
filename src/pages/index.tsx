import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import Head from 'next/head'
import { useWeb3React } from '@web3-react/core'

import useAutoEscrowContract from '@/hooks/useAutoEscrowContract'
import useInjectedConnector from '@/hooks/useInjectedConnector'
import Button from '@/components/atoms/Button'

const Home: NextPage = () => {
  const { activate, account } = useWeb3React()

  const [ammount, setAmmount] = useState<string>('')
  const [value, setValue] = useState<string>('')
  const [id, setId] = useState<number>(0)

  const contract = useAutoEscrowContract(
    '0xB7F20a2B1f74649eF6a5a21699F55D99dBa5F7aF'
  )

  const getEscrowsInfo = async () => {
    console.log('contract: ', contract)
    if (contract) {
      // const contractInfo = await contract.payEscrow(id, { value: ammount })
      const contractInfo = await contract.getEscrowsBySender()
      console.log(contractInfo)
    }
  }

  const payEscrow = async () => {
    if (contract) {
      const contractInfo = await contract.payEscrow(id, { value: ammount })
      console.log(contractInfo)
    }
  }

  const createEscrow = async () => {
    if (contract) {
      const contractInfo = await contract.createEscrow(ammount)
      console.log(contractInfo)
    }
  }

  const toggleActive = async () => {
    if (contract) {
      const contractInfo = await contract.execToggleActive()
      console.log(contractInfo)
    }
  }

  useEffect(() => {
    console.log(ammount)
  }, [ammount])

  const connect = async () => {
    try {
      await activate(useInjectedConnector)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="NextJS ts template" />
      </Head>
      <button onClick={connect}>Connect Wallet</button>
      <Button color="defaultReverse" onClick={() => console.log('Cliquei')}>
        Connect Wallet
      </Button>
      <br />
      {account || ''}
      <br />
      <br />
      <br />
      <input
        value={id}
        onChange={e => setId(parseFloat(e.currentTarget.value))}
        placeholder="ID"
      />
      <br />
      <input
        value={value}
        onChange={e => setValue(e.currentTarget.value)}
        placeholder="Value"
      />
      <br />
      <button onClick={payEscrow}>Pay Escrow</button>
      <br />
      <br />
      <input
        value={ammount}
        onChange={e => setAmmount(e.currentTarget.value)}
        placeholder="Ammount"
      />
      <button onClick={createEscrow}>CreateEscrow</button>
      <br />
      <br />
      <button onClick={getEscrowsInfo}>GetSenderInfo</button>
      <button onClick={toggleActive}>ToggleActive</button>
    </>
  )
}

export default Home
