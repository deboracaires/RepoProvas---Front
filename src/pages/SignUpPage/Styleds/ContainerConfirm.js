import styled from "styled-components";

const ContainerConfirm = styled.div `
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  margin: 0 auto;
  height: 80px;
  PADDING: 0 10px;

  .confirm {
    width: 20%;
    height: 36px;

    background: #1976D2;

    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px rgba(0, 0, 0, 0.14), 0px 1px 5px rgba(0, 0, 0, 0.12);
    border-radius: 4px;
    margin: 0;
  }

  .otherPage {
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    display: flex;
    align-items: center;
    letter-spacing: 0.15px;
    text-decoration-line: underline;
    color: rgba(70, 115, 202, 0.8);
    background-color: #e5e5e5;
    border: none;
    width: 140px;
  }

`;

export default ContainerConfirm;