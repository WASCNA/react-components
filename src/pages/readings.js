import React from 'react'
import styled from "styled-components"
import { NAReadings } from "@gregross.dev/gerg"

const Reading = () => {
  return (
    <Wrapper className="page">
      <NAReadings /> 
    </Wrapper>
  )
}

export default Reading

const Wrapper = styled.main`

`