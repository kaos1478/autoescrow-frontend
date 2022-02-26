// External libs

// Assets
import { SwapMaticIMG } from '@/assets/imgs'

// Componentes

// Subcomponentes and style
import Typography from '@/components/atoms/Typography'
import PartnerListItem from '@/components/molecules/PartnerListItem'
import * as Styled from './styles'

// Services

// Types

const PartnerList: React.FC = () => {
  const partnersList = [
    {
      name: 'SwapMatic',
      link: 'https://swapmatic.io/',
      image: SwapMaticIMG
    }
  ]

  return (
    <Styled.Container>
      <Typography as="heading1">Partners</Typography>
      <Styled.List>
        {partnersList.map(partner => (
          <PartnerListItem key={partner.name} partner={partner} />
        ))}
      </Styled.List>
    </Styled.Container>
  )
}

export default PartnerList
