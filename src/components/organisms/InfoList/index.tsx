// External libs

// Assets

// Componentes
import InfoListItem from '@/components/molecules/InfoListItem'

// Subcomponentes and style
import * as Styled from './styles'
import InfoListGroup from './InfoListGroup'

// Services
import { RootState, useAppSelector } from '@/redux/store'

// Types

const InfoList: React.FC = () => {
  const { info } = useAppSelector((state: RootState) => state.myProfile)

  return (
    <Styled.Container>
      <InfoListGroup title="As Payer">
        <InfoListItem
          description={info.currentDisputeAsPayer}
          title="Current disputes: "
        />
        <InfoListItem
          description={info.currentPaidAsPayer}
          title="Current Paid: "
        />
        <InfoListItem
          description={info.totalPaidAsPayer}
          title="Total Paid: "
        />
      </InfoListGroup>
      <InfoListGroup title="As Sender">
        <InfoListItem
          description={info.currentDisputeAsSender}
          title="Current disputes: "
        />
        <InfoListItem
          description={info.currentOpenAsSender}
          title="Current open: "
        />
        <InfoListItem
          description={info.currentPaidAsSender}
          title="Current Paid: "
        />
        <InfoListItem
          description={info.totalDisputeAsPayer}
          title="Total Disputes: "
        />
        <InfoListItem
          description={info.totalDisputeAsSender}
          title="Total disputes: "
        />
        <InfoListItem
          description={info.totalPaidAsSender}
          title="Total Paid: "
        />
      </InfoListGroup>
      <InfoListGroup title="Global">
        <InfoListItem title="Total Created: " description={info.totalCreated} />
      </InfoListGroup>
    </Styled.Container>
  )
}

export default InfoList
