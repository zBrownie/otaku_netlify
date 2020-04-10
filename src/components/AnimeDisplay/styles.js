import styled from "styled-components";

export const Container = styled.div`
  
  h1 {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 40px;
    color: #737380;
  }
  p {
    text-align: center;
    margin: 10px 0;
    font-size: 18px;
    color: #73738088;
    font-weight: bold;
  }

  .loadingWidget {
    display:flex;
    justify-content:center;
    margin-top:18px;
  }

  ul {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    align-items: center;
    margin: 10px auto;
  }
  li {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    list-style: none;
  }
  li .admin {
    display: flex;
    flex-direction: row;
    button {
      margin-left: 8px;
      color: #23231f;
      font-weight: 500;
      background: #cccccc99;
      padding: 8px 16px;
      border: 0;
    }
  }
  @media (max-width: 850px) {
    ul {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
  @media (max-width: 700px) {
    ul {
      grid-template-columns: 1fr 1fr;
    }
  }
  @media (max-width: 480px) {
    ul {
      grid-template-columns: 1fr;
    }
  }
`;

export const PosterAnime = styled.div`
  margin: 12px auto;
  width: 200px;
  height: 300px;
  background-image: url(${(props) => props.src});
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 3px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: 1s;
  :hover {
    transform: scale(1.09);
  }
  span {
    text-align: center;
    background: #cccccc44;
    color: #000000dd;
    padding: 16px 0;
    font-weight: 700;
    text-shadow: -1px -1px 0px #fff, 0px -1px 0px #fff, 1px -1px 0px #fff,
      -1px 0px 0px #fff, 1px 0px 0px #fff, -1px 1px 0px #fff, 0px 1px 0px #fff,
      1px 1px 0px #fff;
  }
`;
