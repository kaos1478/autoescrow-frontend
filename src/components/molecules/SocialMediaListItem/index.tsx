// External libs

// Assets

// Componentes

// Subcomponentes and style
import Typography from '@/components/atoms/Typography'
import * as Styled from './styles'

// Services

// Types
interface ISocialMedia {
  title: string
  link: string
}

interface ISocialMediaListItemProps {
  media: ISocialMedia
}

const SocialMediaListItem: React.FC<ISocialMediaListItemProps> = ({
  media
}) => {
  return (
    <Styled.Container>
      <a href={media.link} target="blank">
        <Typography as="body1">{media.title}</Typography>
      </a>
    </Styled.Container>
  )
}

export default SocialMediaListItem
