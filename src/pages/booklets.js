import React from 'react'
import styled from "styled-components"
import {Booklets} from "@gregross.dev/gerg"

const Booklet = () => {
  return (
    <Wrapper className="page">
      <Booklets /> 
    </Wrapper>
  )
}

export default Booklet

const Wrapper = styled.main`
  margin-left: 1rem;
  
 article {
   width: 180px;
 }

 .booklets-title {
   max-width: 12rem;
 }
`