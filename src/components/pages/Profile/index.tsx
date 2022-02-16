// External libs

// Assets

// Componentes
import InfoList from '@/components/organisms/InfoList'
import Page from '@/components/templates/Page'
import useAutoEscrowContract from '@/hooks/useAutoEscrowContract'
import { asyncGetProfile } from '@/redux/slicers/myProfileSlice'
import { RootState, useAppDispatch, useAppSelector } from '@/redux/store'
import { Ellipse } from '@/utils/text'
import { useWeb3React } from '@web3-react/core'
import { useEffect } from 'react'

// Subcomponentes and style

// Services

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
      title={`Profile - ${account && Ellipse(address || account)}`}
      loading={fetching}
    >
      <InfoList />
    </Page>
  )
}

export default Profile
