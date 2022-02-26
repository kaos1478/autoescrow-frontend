import Head from 'next/head'
import type { NextPage } from 'next'
import Info from '@/components/pages/Info'

const HelpPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>SelfEscrow - Info</title>
      </Head>
      <Info />
    </>
  )
}

export default HelpPage
