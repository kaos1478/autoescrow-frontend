// External libs

// Assets

// Componentes

// Subcomponentes and style
import InfoListItem from '@/components/molecules/InfoListItem'
import * as Styled from './styles'

// Services
import { RootState, useAppSelector } from '@/redux/store'
import InfoListGroup from './InfoListGroup'

// Types

const InfoList: React.FC = () => {
  const { info } = useAppSelector((state: RootState) => state.myProfile)

  return (
    <Styled.Container>
      <InfoListGroup title="As Payer">
        <InfoListItem
          title="Current disputes: "
          description={info.currentDisputeAsPayer}
        />
        <InfoListItem
          title="Current Paid: "
          description={info.currentPaidAsPayer}
        />
        <InfoListItem
          title="Total Paid: "
          description={info.totalPaidAsPayer}
        />
      </InfoListGroup>
      <InfoListGroup title="As Sender">
        <InfoListItem
          title="Current disputes: "
          description={info.currentDisputeAsSender}
        />
        <InfoListItem
          title="Current open: "
          description={info.currentOpenAsSender}
        />
        <InfoListItem
          title="Current Paid: "
          description={info.currentPaidAsSender}
        />
        <InfoListItem
          title="Total Disputes: "
          description={info.totalDisputeAsPayer}
        />
        <InfoListItem
          title="Total disputes: "
          description={info.totalDisputeAsSender}
        />
        <InfoListItem
          title="Total Paid: "
          description={info.totalPaidAsSender}
        />
      </InfoListGroup>
      <InfoListGroup title="Global">
        <InfoListItem title="Total Created: " description={info.totalCreated} />
      </InfoListGroup>
    </Styled.Container>
  )
}

export default InfoList
