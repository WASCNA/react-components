import React from 'react'
import styled from "styled-components"
import {IPs} from "@gregross.dev/gerg"

const IP = () => {
  return (
    <Wrapper className="page">
      <IPs /> 
    </Wrapper>
  )
}

export default IP

const Wrapper = styled.main`
  margin-left: 1rem;
  
  .ips-title {
    font-family: var(--fontFamily);
    font-weight: 500;
  }

  article {
    width: 160px;
  }
`