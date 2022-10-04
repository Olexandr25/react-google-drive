import { Aside, Content, Header } from './components'

import { Box } from 'components'

const AppLayout = () => {
  return (
    <Box>
      <Box>
        <Header />
      </Box>
      <Box>
        <Aside />
      </Box>
      <Box>
        <Content />
      </Box>
    </Box>
  )
}

export default AppLayout
