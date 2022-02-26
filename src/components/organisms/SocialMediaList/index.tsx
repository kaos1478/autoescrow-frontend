// External libs

// Assets

// Componentes

// Subcomponentes and style
import Typography from '@/components/atoms/Typography'
import SocialMediaListItem from '@/components/molecules/SocialMediaListItem'
import * as Styled from './styles'

// Services

// Types

const SocialMediaList: React.FC = () => {
  const socialMediaItems = [
    {
      title: 'Discord',
      link: 'https://discord.gg/sBUyJgPsPR'
    }
  ]

  return (
    <Styled.Container>
      <Typography as="heading1">Social</Typography>
      <Styled.List>
        {socialMediaItems.map(media => (
          <SocialMediaListItem key={media.title} media={media} />
        ))}
      </Styled.List>
    </Styled.Container>
  )
}

export default SocialMediaList
