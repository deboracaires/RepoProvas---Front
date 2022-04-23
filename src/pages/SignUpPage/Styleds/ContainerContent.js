import styled from "styled-components";

const ContainerContent = styled.div`
  margin-top: 190px;
  width: 40vw;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 24px;
    display: flex;
    align-items: center;
    letter-spacing: 0.15px;
    color: rgba(0, 0, 0, 0.8);
  }

  button {
    margin-top: 30px;
    background: #424445;
    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px rgba(0, 0, 0, 0.14), 0px 1px 5px rgba(0, 0, 0, 0.12);
    border-radius: 4px;
    border: none;
    color: #fff;
    width: 100%;
    height: 36px;
  }
  button:hover {
    cursor: pointer;
  }

  button:active {
    box-shadow: 0 3px #666;
    transform: translateY(4px);
  }

`

export default ContainerContent;