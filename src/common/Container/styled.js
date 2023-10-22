import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  max-width: 900px;
  height: auto;
  border: none;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 20px;
  display: grid;
  grid-template-rows: auto;
  background-color: ${({ theme }) => theme.colors.mercury};
  -webkit-box-shadow: 1px 2px 24px -16px rgba(66, 68, 90, 1);
  -moz-box-shadow: 1px 2px 24px -16px rgba(66, 68, 90, 1);
  box-shadow: 1px 2px 24px -16px rgba(66, 68, 90, 1);
`;
