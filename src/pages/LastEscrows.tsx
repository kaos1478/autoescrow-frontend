import Head from 'next/head'
import LastEscrows from '@/components/pages/LastEscrows'
import type { NextPage } from 'next'

const LastEscrowsPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>SelfEscrow - Last Escrows</title>
      </Head>
      <LastEscrows />
    </>
  )
}

export default LastEscrowsPage
