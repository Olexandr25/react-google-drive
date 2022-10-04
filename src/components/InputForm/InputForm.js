import { AiOutlineSearch } from "react-icons/ai"
import { Input } from 'components'
import { InputFormWrapper } from './InputForm.styled'
import React from 'react'

const InputForm = () => {
  return (
    <InputFormWrapper>
    <AiOutlineSearch />
      <Input />
    </InputFormWrapper>
  )
}

export default InputForm
