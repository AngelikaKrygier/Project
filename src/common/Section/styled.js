import styled from "styled-components";
import { ReactComponent as DocumentIcon } from "../../images/DocumentIcon.svg";

export const StyledSection = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
`;

export const SectionHeader = styled.h2`
  padding: 15px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.codGrey};
  letter-spacing: 1px;
`;

export const Content = styled.div`
  grid-column: span 2;
`;

export const StyledDocumentIcon = styled(DocumentIcon)``;
