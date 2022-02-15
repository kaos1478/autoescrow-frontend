// External libs

// Assets

// Componentes
import Typography from '@/components/atoms/Typography'
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

  const { info, fetching } = useAppSelector(
    (state: RootState) => state.myProfile
  )

  useEffect(() => {
    getProfileInfo()
  }, [account, contract])

  return (
    <Page
      title={`Profile - ${account && Ellipse(address || account)}`}
      loading={fetching}
    >
      <Typography as="body1" align="center">
        Current disputes as Payer: {info.currentDisputeAsPayer}
      </Typography>
      <br />
      <Typography as="body1" align="center">
        Current disputes as Sender: {info.currentDisputeAsSender}
      </Typography>
      <br />
      <Typography as="body1" align="center">
        Current open as Sender: {info.currentOpenAsSender}
      </Typography>
      <br />
      <Typography as="body1" align="center">
        Current Paid as Payer: {info.currentPaidAsPayer}
      </Typography>
      <br />
      <Typography as="body1" align="center">
        Current Paid as Sender: {info.currentPaidAsSender}
      </Typography>
      <br />
      <Typography as="body1" align="center">
        Total Created: {info.totalCreated}
      </Typography>
      <br />
      <Typography as="body1" align="center">
        Total Disputes as Payer: {info.totalDisputeAsPayer}
      </Typography>
      <br />
      <Typography as="body1" align="center">
        Total Disputes as Sender: {info.totalDisputeAsSender}
      </Typography>
      <br />
      <Typography as="body1" align="center">
        Total Paid as Payer: {info.totalPaidAsPayer}
      </Typography>
      <br />
      <Typography as="body1" align="center">
        Total Paid as Sender: {info.totalPaidAsSender}
      </Typography>
    </Page>
  )
}

export default Profile
