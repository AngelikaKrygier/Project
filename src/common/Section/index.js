import {
  StyledSection,
  SectionHeader,
  Content,
  StyledDocumentIcon,
} from "./styled";
import { Tile } from "./Tile";

export const Section = ({ sectionHeader, list }) => (
  <StyledSection>
    <StyledDocumentIcon />
    <SectionHeader>{sectionHeader}</SectionHeader>
    <Content>
      <Tile list={list} headerTile={"PAM"} />
      <Tile list={list} headerTile={"ePAM"} />
    </Content>
  </StyledSection>
);
