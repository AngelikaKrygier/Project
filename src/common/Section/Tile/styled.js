import styled from "styled-components";
import { ReactComponent as VectorDown } from "../../../images/vectorDown.svg";
import { ReactComponent as VectorUp } from "../../../images/vectorUp.svg";

export const StyledTile = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  -webkit-box-shadow: 1px 2px 24px -16px rgba(66, 68, 90, 1);
  -moz-box-shadow: 1px 2px 24px -16px rgba(66, 68, 90, 1);
  box-shadow: 1px 2px 24px -16px rgba(66, 68, 90, 1);
  padding: 20px;
  margin: 10px;
  display: grid;
  grid-template-columns: 1fr auto;
`;

export const HeaderTile = styled.h3`
  margin: 0;
  color: ${({ theme }) => theme.colors.codGrey};
  font-weight: 700;
`;

export const StyledVectorDown = styled(VectorDown)`
  cursor: pointer;
`;

export const StyledVectorUp = styled(VectorUp)`
  cursor: pointer;
`;

export const List = styled.ul`
  padding: 0;
  margin-bottom: 0;
  display: grid;
`;

export const ListItem = styled.li`
  list-style: none;
  padding: 5px;
`;

export const ListItemHeader = styled.a`
  color: ${({ theme }) => theme.colors.affair};
  font-weight: 600;
  &:hover {
    cursor: pointer;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.orange};
    transition: 0.3s;
  }
`;

export const ListItemConetnt = styled.p`
  line-height: 1.5;
  text-align: justify;
`;
