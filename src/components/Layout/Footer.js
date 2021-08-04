import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Wrapper>
      <div className="footer-info">
        <article className="address">
          <h3>Address</h3>
          <address>WASCNA, P.O. Box 6837 Wheeling, WV 26003</address>
        </article>
        <article>
          <h3>Helpline</h3>
          <a href="tel:888-251-2426">888-251-2426</a>
        </article>
      </div>
      <div className="footer-copy">
        <p>&copy; {new Date().getFullYear()} Wheeling NA. All Rights Reserved</p>
        <p>Issues? <a href="mailto:wascna@gmail.com"> Email Webservant</a></p>
      </div>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.footer`

  display: flex;
  flex-direction: column;

  .footer-info {
    background: #00ff00;
    display: flex;
    padding: 1em 0;
  }

  .footer-info h3 {
    margin: 0.5em 0;
  }

  .address {
    margin-left: 2rem;
    max-width: 50%;
  }

  .footer-copy {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #ff0000;
    color: whitesmoke;
    padding: 1em 0;
  }

  .footer-copy p {
    margin: 0.75em 0;
  }
`;
