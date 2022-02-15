import Head from 'next/head'
import MyEscrows from '@/components/pages/MyEscrows'
import type { NextPage } from 'next'

const MyEscrowsPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>SelfEscrow - My Escrows</title>
      </Head>
      <MyEscrows />
    </>
  )
}

export default MyEscrowsPage
