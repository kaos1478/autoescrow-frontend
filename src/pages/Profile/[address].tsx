import Head from 'next/head'
import Profile from '@/components/pages/Profile'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'

const ProfilePage: NextPage = () => {
  const router = useRouter()
  const { address } = router.query
  const parsedAddress = address?.toString()

  return (
    <>
      <Head>
        <title>SelfEscrow - Profile</title>
      </Head>
      <Profile address={parsedAddress} />
    </>
  )
}

export default ProfilePage
