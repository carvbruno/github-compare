import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 60px;
`;

export const Form = styled.form`
  margin-top: 20px;
  width: 100%;
  max-width: 400px;
  display: flex;

  input {
    flex: 1;
    height: 55px;
    padding: 0 20px;
    background: #fff;
    font-size: 18px;
    color: #444;
    border-radius: 3px;

    border: ${props => (props.withError ? "5px solid #F00" : 0)};
  }

  button {
    width: 70px;
    height: 55px;
    padding: 0 20px;
    margin-left: 10px;
    background: #00a8ff;
    color: #fff;
    border: 0;
    font-size: 30px;
    font-weight: bold;
    border-radius: 3px;
    cursor: pointer;

    &:hover {
      background: #0097e6;
    }
  }
`;
