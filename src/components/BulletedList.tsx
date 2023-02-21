import { List, ListItem } from "@mui/material";

export type Input = {
  listItems: Array<string>;
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
