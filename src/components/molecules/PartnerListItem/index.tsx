// External libs
import Image from 'next/image'

// Assets

// Componentes

// Subcomponentes and style
import * as Styled from './styles'

// Services

// Types
export interface IPartner {
  link: string
  name: string
  image: any
}

interface IPartnerListItemProps {
  partner: IPartner
}

const PartnerListItem: React.FC<IPartnerListItemProps> = ({ partner }) => {
  return (
    <Styled.Container>
      <a href={partner.link} target="blank">
        <Image alt={partner.name} src={partner.image} />
      </a>
    </Styled.Container>
  )
}

export default PartnerListItem
