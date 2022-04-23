import styled from "styled-components";

const Divider = styled.div `
  display: flex;
  align-items: center;
  margin-top: 20px;
  div {
    width: 19vw;
    height: 1px;
    background-color: #c4c4c4;
  }
  h1 {
    margin: 0 8px;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 12px;
    line-height: 24px;
    display: flex;
    align-items: center;
    letter-spacing: 0.15px;
    color: rgba(0, 0, 0, 0.8);
  }
`;

export default Divider;