import styled from "styled-components";

export const Container = styled.div`
  background: linear-gradient(65deg, #1b9cf6, #31dec0);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 5vh;
  align-items: center;
  p {
    font-family: Roboto;
    font-size: 40px;
    font-weight: bold;
    color: white;
  }

  button {
    background: linear-gradient(#81ee8e, #00cafd);
    border: none;
    border-radius: 50px;
    font-family: Roboto;
    font-size: 20px;
    font-weight: bold;
    color: white;
    padding: 1rem 2rem 1rem 2rem;
    margin: 2rem 0 2rem 0;
    &:hover {
      background: linear-gradient(#00cafd, #81ee8e);
    }
    &:active {
      border: 1px lightgray solid;
    }
  }
`;

export const LogoContainer = styled.img`
  display: flex;
  align-self: flex-start;
  height: 200px;
`;
