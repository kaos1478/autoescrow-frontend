import Head from 'next/head'
import Help from '@/components/pages/Help'
import type { NextPage } from 'next'

const HelpPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>SelfEscrow - Help</title>
      </Head>
      <Help />
    </>
  )
}

export default HelpPage
