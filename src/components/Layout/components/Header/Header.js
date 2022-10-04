import { Avatar, Box, Img, InputForm, Text } from 'components'
import { TbGridDots, TbSettings } from 'react-icons/tb'

import { AiOutlineQuestionCircle } from 'react-icons/ai'
import HeaderWrapper from './Header.styled'

const Header = () => {
  return (
    <HeaderWrapper bg='bisque'>
      <Box display='flex' alignItems='center'>
        <Img src='GoogleDrive.png' />
        <Text variant="logo" ml="var(--offset-8)">Drive</Text>
      </Box>
      <Box>
        <InputForm />
      </Box>
      <Box display='flex' alignItems='center'>
        <Box
          display='flex'
          alignItems='center'
          style={{ marginRight: 'var(--offset-40)' }}>
          <Box style={{ padding: 'var(--offset-8)' }}>
            <AiOutlineQuestionCircle
              style={{
                width: '24px',
                height: '24px',
                color: 'var(--icon-color)',
              }}
            />
          </Box>
          <Box style={{ padding: 'var(--offset-8)' }}>
            <TbSettings
              style={{
                width: '24px',
                height: '24px',
                color: 'var(--icon-color)',
              }}
            />
          </Box>
        </Box>
        <Box display='flex' alignItems='center'>
          <Box style={{ padding: 'var(--offset-8)' }}>
            <TbGridDots
              style={{
                width: '24px',
                height: '24px',
                color: 'var(--icon-color)',
              }}
            />
          </Box>
          <Box style={{ padding: '4px 2px 4px 6px' }}>
            <Avatar />
          </Box>
        </Box>
      </Box>
    </HeaderWrapper>
  )
}

export default Header
