import styled from 'styled-components'

const ImgStyled = styled.img`
  width: ${({width}) => width || '40px'};
  height: ${({height}) => height || '40px'};
`

export default ImgStyled