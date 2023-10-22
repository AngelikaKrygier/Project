import {
  HeaderTile,
  List,
  ListItem,
  ListItemConetnt,
  ListItemHeader,
  StyledTile,
  StyledVectorDown,
  StyledVectorUp,
} from "./styled";
import { useState } from "react";

export const Tile = ({ headerTile, list }) => {
  const [isListOpen, setIsListOpen] = useState(false);

  const toggleList = () => {
    setIsListOpen(!isListOpen);
  };

  return (
    <StyledTile>
      <HeaderTile>{headerTile}</HeaderTile>
      {isListOpen ? (
        <StyledVectorUp onClick={toggleList} />
      ) : (
        <StyledVectorDown onClick={toggleList} />
      )}
      {isListOpen && (
        <List>
          {list.map((item) => (
            <ListItem key={item.id}>
              <ListItemHeader href={item.path}>{item.header}</ListItemHeader>
              <ListItemConetnt>{item.content}</ListItemConetnt>
            </ListItem>
          ))}
        </List>
      )}
    </StyledTile>
  );
};
