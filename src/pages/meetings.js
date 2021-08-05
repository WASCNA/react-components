import React from 'react'
import styled from "styled-components"
import {Meetings} from "@gregross.dev/gerg"


const Meeting = () => {
  return (
    <Wrapper className="page">
      <Meetings /> 
    </Wrapper>
  )
}

export default Meeting

const Wrapper = styled.main`
  
`
