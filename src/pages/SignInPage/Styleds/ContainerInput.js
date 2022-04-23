import styled from "styled-components";

const ContainerInput = styled.div `
  width: 100%;
  position: relative;
  input {
    width: 100%;
    height: 50px;
    border-radius: 5px;
    border: 1px solid #c0c0c0;
    margin-top: 15px;
    padding: 0 50px 0 8px;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    display: flex;
    align-items: center;
    letter-spacing: 0.15px;
    color: rgba(0, 0, 0, 0.6);

    ::placeholder {
        font-family: 'Poppins', sans-serif;
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        display: flex;
        align-items: center;
        letter-spacing: 0.15px;
        color: rgba(0, 0, 0, 0.6);
    }
  }

  input:hover {
    cursor: pointer;
  }

  div {
    position: absolute;
    right: 8px;
    bottom: 11px;
    background-color: white;
    width: 25px;
  }

  div:hover {
    cursor: pointer;
  }

  textarea:focus, input:focus, select:focus {
    border: 1px solid #c0c0c0;
    outline: 0;
  } 
`;

export default ContainerInput;