import ImgStyled from './Img.styled'

const Img = props => {
  const { src, alt } = props
  
  return <ImgStyled src={src} alt={alt} />
}

export default Img
