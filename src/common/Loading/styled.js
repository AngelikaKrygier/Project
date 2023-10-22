import styled, { keyframes } from "styled-components";
import { ReactComponent as Loader } from "../../images/loader.svg";

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const StyledLoader = styled(Loader)`
  max-width: 40px;
  max-height: 40px;
  margin: 108px 0px;
  justify-self: center;
  animation: ${rotate360} 1s linear infinite;
`;
