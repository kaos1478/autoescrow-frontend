import Head from 'next/head'
import Profile from '@/components/pages/Profile'
import type { NextPage } from 'next'

const MyProfilePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>SelfEscrow - My Profile</title>
      </Head>
      <Profile />
    </>
  )
}

export default MyProfilePage
