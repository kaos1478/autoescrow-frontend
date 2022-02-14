// External libs

// Assets

// Componentes

// Subcomponentes and style
import InfoListItem, {
  IInfoListItemProps
} from '@/components/molecules/InfoListItem'
import * as Styled from './styles'

// Services

// Types
interface IInfoList {
  infoList: IInfoListItemProps[]
}

const InfoList: React.FC<IInfoList> = ({ infoList }) => {
  return (
    <Styled.Container>
      {infoList.map(info => (
        <InfoListItem
          key={info.title}
          title={info.title}
          description={info.description}
        />
      ))}
    </Styled.Container>
  )
}

export default InfoList
