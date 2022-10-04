import InputStyled from './Input.styled'
import PropTypes from 'prop-types'

const Input = props => {
  const { value, onChange } = props

  return <InputStyled value={value} onChange={onChange} />
}
Input.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
}

export default Input
