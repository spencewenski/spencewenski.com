import { List, ListItem } from "@mui/material";
import { ReactNode } from "react";

export type Input = {
  listItems: Array<ReactNode>;
};

export default function BulletedList({ listItems }: Input) {
  return (
    <List sx={{ listStyleType: "disc", paddingLeft: 2 }}>
      {listItems.map((item, index) => (
        <ListItem
          key={index}
          sx={{
            display: "list-item",
            padding: 0,
          }}
        >
          {item}
        </ListItem>
      ))}
    </List>
  );
}
