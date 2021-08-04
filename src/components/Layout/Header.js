import React from "react";
import { Link } from "gatsby";
import logo from "../../images/logo.svg";
import styled from "styled-components";

const Header = () => {
  return (
    <Link to="/">
      <Wrapper>
        <img src={logo} alt="wheelingna" className="site-logo" />
        <div className="site-text-box">
          <h1 className="site-name">
            Wheeling Area <span className="site-name-of">of</span>
          </h1>
          <div className="underline"></div>
          <h1 className="site-name-na"> Narcotics Anonymous </h1>
        </div>
      </Wrapper>
    </Link>
  );
};

export default Header;

const Wrapper = styled.header`
  display: flex;
  padding: 1rem 0;
  margin-left: 1rem;

  h1 {
    margin: 0.25em 0;
    font-size: 1.6rem;
  }

  .site-logo {
  }

  .site-text-box {
    display: flex;
    flex-direction: column;
  }

  .site-name {
    font-weight: 800;
  }

  .site-name-of {
    font-weight: 300;
  }

  .site-name-na {
    font-weight: 700;
  }

  .underline {
    width: 100%;
    height: 0.1rem;
    background: #ccc;
    margin-left: auto;
    margin-right: auto;
  }
`;
