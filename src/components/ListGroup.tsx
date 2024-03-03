import { useState } from "react";

interface props {
  items: string[];
  heading: string;
  onItemSelected: (item: string) => void;
}

function ListGroup({ items, heading, onItemSelected }: props) {
  // const message = items.length === 0 ? <p>no items found</p> : null;

  const [selectedIndex, setSelectedIndex] = useState(-1);
  return (
    <>
      <h1>{heading}</h1>

      {items.length === 0 && <p>no items found</p>}

      <ul className="list-group">
        {items.map((item, i) => (
          <li
            key={item}
            className={
              selectedIndex === i ? "list-group-item active" : "list-group-item"
            }
            onClick={() => {
              setSelectedIndex(i);
              onItemSelected(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
