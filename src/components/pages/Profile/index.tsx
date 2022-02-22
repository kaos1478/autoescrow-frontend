// External libs
import { useEffect } from 'react'
import { useWeb3React } from '@web3-react/core'

// Assets

// Componentes
import InfoList from '@/components/organisms/InfoList'
import Page from '@/components/templates/Page'

// Subcomponentes and style

// Services
import useAutoEscrowContract from '@/hooks/useAutoEscrowContract'
import { asyncGetProfile } from '@/redux/slicers/myProfileSlice'
import { Ellipse } from '@/utils/text'
import { RootState, useAppDispatch, useAppSelector } from '@/redux/store'

// Types
interface IProfileProps {
  address?: string
}

const Profile: React.FC<IProfileProps> = ({ address }) => {
  const contract = useAutoEscrowContract()
  const dispatch = useAppDispatch()
  const { account } = useWeb3React()

  const getProfileInfo = () => {
    if (account) {
      dispatch(asyncGetProfile(contract, address || account))
    }
  }

  const { fetching } = useAppSelector((state: RootState) => state.myProfile)

  useEffect(() => {
    getProfileInfo()
  }, [account, contract])

  return (
    <Page
      loading={fetching}
      title={`Profile - ${account && Ellipse(address || account)}`}
    >
      <InfoList />
    </Page>
  )
}

export default Profile
