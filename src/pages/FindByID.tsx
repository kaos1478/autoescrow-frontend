import FindByID from '@/components/pages/FindByID'
import Head from 'next/head'
import type { NextPage } from 'next'

const FindByIDPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>SelfEscrow - Find by ID</title>
      </Head>
      <FindByID />
    </>
  )
}

export default FindByIDPage
