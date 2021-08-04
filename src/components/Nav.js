import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { MdHelp, MdPeople, MdInfo } from "react-icons/md";
import { BsChatQuote } from "react-icons/bs";
import { TiBook, TiLink } from "react-icons/ti";
import { SiReadthedocs } from "react-icons/si";
import { RiServiceFill } from "react-icons/ri";
import { BsBriefcaseFill } from "react-icons/bs";


const Nav = () => {
  return (
    <Wrapper>
      <Link to="/help" className="btn">
        <MdHelp className="icon" />
        <h2 className="nav-title">Need Help?</h2>
      </Link>
      <div className="btn">
        <MdPeople className="icon" />
        <h2 className="nav-title">Meetings</h2>
      </div>
      <div className="btn">
        <BsChatQuote className="icon" />
        <h2 className="nav-title">Just For Today</h2>
      </div>
      <Link to="/ip" className="btn">
        <MdInfo className="icon" />
        <h2 className="nav-title">IP's</h2>
      </Link>
      <Link to="/readings" className="btn">
        <SiReadthedocs className="icon" />
        <h2 className="nav-title">Readings</h2>
      </Link>
      <Link to="/booklets" className="btn">
        <TiBook className="icon" />
        <h2 className="nav-title">Booklets</h2>
      </Link>
      <Link to="/nalinks" className="btn">
        <TiLink className="icon" />
        <h2 className="nav-title">Links</h2>
      </Link>
      <Link to="/service" className="btn">
        <RiServiceFill className="icon" />
        <h2 className="nav-title">Service</h2>
      </Link>
      <Link to="/professionals" className="btn">
        <BsBriefcaseFill className="icon" />
        <h2 className="nav-title text-br">For Professionals</h2>
      </Link>
      <div className="btn">
        <BsChatQuote className="icon" />
        <h2 className="nav-title">Books</h2>
      </div>
      <div className="btn">
        <BsChatQuote className="icon" />
        <h2 className="nav-title">Events</h2>
      </div>
    </Wrapper>
  );
};

export default Nav;

const Wrapper = styled.nav`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
  padding: 1rem 0;

  .btn {
    width: 100%;
    height: 100%;
    background: #C4C4C4;
    box-shadow: 0px 4px 15px rgba(255, 0, 0, 0.15);
    border-radius: 0.75rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .icon {
    width: 72px;
    height: 72px;
    margin-top: 4px;
    color: #000; 
  }

  .nav-title {
    font-size: 1.3rem;
    text-align: center;
    margin: 0.25em 0 0.5em;
    font-weight: 700;
  }

  .text-br {
    font-size: 0.9rem;
    text-align: left;
    margin-left: 0.5em;
  }
`;
