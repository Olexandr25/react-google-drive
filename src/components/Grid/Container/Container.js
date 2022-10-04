import { ContainerStyled } from './Container.styled'
import PropTypes from 'prop-types'

const Container = props => {
  const { children, variant, className } = props

  return (
    <ContainerStyled
      data-testid='container'
      variant={variant}
      className={className}>
      {children}
    </ContainerStyled>
  )
}
Container.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.string,
  className: PropTypes.string,
}

export default Container
