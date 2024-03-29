import LastEscrows from '@/components/pages/LastEscrows'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return <LastEscrows />
}

export default Home

export async function getServerSideProps() {
  return {
    redirect: {
      destination: '/LastEscrows',
      permanent: false
    }
  }
}
