import PropTypes from 'prop-types'
import { RowStyled } from "./Row.styled"

const Row = props => {
  const { children, className } = props

  return (
    <RowStyled data-testid="row" className={className}>
      {children}
    </RowStyled>
  )
}
Row.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}


export default Row
