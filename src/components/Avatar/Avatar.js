import AvatarStyled from './Avatar.styled'
import { Box } from 'components'

const Avatar = () => {
  return (
    <Box style={{padding: 'var(--offset-4)'}}>
      <AvatarStyled
        src='https://lh3.googleusercontent.com/ogw/AOh-ky1Gzsi0y6qyemUzU-FyQyqr7ChqaZLoV_4kCH1I7mg=s32-c-mo'
        alt='avatar'
      />
    </Box>
  )
}

export default Avatar
