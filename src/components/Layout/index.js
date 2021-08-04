import React from 'react'
import Header from "./Header"
import Footer from "./Footer"
import styled from "styled-components";
import "../../assets/main.css"

const Layout = ({ children }) => {
  return (
    <Wrapper>
      <Header />
      {children}
      <Footer />
    </Wrapper>
  )
}

export default Layout

const Wrapper = styled.div`
  border: 1px solid blue;

  margin: 0 auto;
  max-width: 414px;

`;
