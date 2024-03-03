import ListGroup from "./components/ListGroup";

function App() {
  let items = ["Egypt", "Suadi", "EUA", "America"];
  // the same Concept of Angular Output();
  const handleClick = (item: string): void => console.log(item);

  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onItemSelected={handleClick}
      ></ListGroup>
    </div>
  );
}

export default App;
