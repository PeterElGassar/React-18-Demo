import { useState } from "react";
import style from "./ListGroup.module.css";
import styled from "styled-components";

const List = styled.ul`
  list-style: none;
  padding: 0;
`;
const ListItem = styled.li<listItemProps>`
  padding: 5px 0;
  background: ${(props) => (props.active ? "blue" : "none")};
`;

interface listItemProps {
  active: boolean;
}
interface props {
  items: string[];
  heading: string;
  onItemSelected: (item: string) => void;
}

function ListGroup({ items, heading, onItemSelected }: props) {
  // const message = items.length === 0 ? <p>no items found</p> : null;

  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <>
      <h1>{heading}</h1>

      {items.length === 0 && <p>no items found</p>}

      <List>
        {items.map((item, i) => (
          <ListItem
            active={i === selectedIndex}
            key={item}
            onClick={() => {
              setSelectedIndex(i);
              onItemSelected(item);
            }}
          >
            {item}
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default ListGroup;
