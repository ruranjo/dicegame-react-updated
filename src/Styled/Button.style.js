import styled from "styled-components"


export const Button = styled.button`
    color: white;
    padding: 1rem 2rem;
    background: #000000;
    border-radius: 1rem;
    min-width: 10rem;
    border: none;
    font-size:16px;
    border:1px solid transparent;
    cursor:pointer;
    transition: 0.4s background ease-in;
    &:hover{
        background-color: white;
        border: 1px solid black;
        color: black;
        transition: 0.3s background ease-in;
    }

`;

export const OutlineButton = styled(Button)`
  background-color: white;
  border: 1px solid black;
  color: black;
  &:hover {
    background-color: black;
    border: 1px solid transparent;
    color: white;
  }
`;
