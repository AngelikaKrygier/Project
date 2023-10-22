import styled from "styled-components";
import Banner from "../../images/Banner.png";

export const StyledBanner = styled.div`
  padding: 15px;
  display: grid;
  grid-template-columns: minmax(0, 900px);
  grid-template-rows: 1fr auto;
  height: 350px;
  justify-content: center;
  align-items: end;
  background-image: url(${Banner});
`;

export const Header = styled.h1`
  margin: 0;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.white};
`;

export const Span = styled.span`
  margin: 40px 0 20px;
  align-self: flex-start;
  font-size: 20px;
  line-height: 2;
  text-align: justify;
  color: ${({ theme }) => theme.colors.white};
`;
