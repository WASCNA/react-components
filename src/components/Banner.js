import React from "react";
import styled from "styled-components";

const Banner = ({ title }) => {
  return (
    <Wrapper>
      <h2>{title}</h2>
    </Wrapper>
  );
};

export default Banner;

const Wrapper = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("banner.jpg");

  /* Set a specific height */
  height: 15vh;
  
  /* Position and center the image to scale nicely on all screens */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;

  h2 {
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -100%);
    color: white;
  }
`;
