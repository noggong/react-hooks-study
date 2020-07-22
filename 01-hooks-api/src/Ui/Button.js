import styled from "styled-components";

const Button = styled.button`
  border: 1px solid ${(props) => props.color || "red"};
  padding: 1rem;
  display: ${(props) => props.display || "inline-block"};
`;

export const ButtonRed = styled(Button)`
  background: red;
  color: #fff;
`;

export default Button;
