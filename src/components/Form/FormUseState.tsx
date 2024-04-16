import { FormEvent, useState } from "react";

const FormUseState = () => {
  const [person, setPerson] = useState({
    name: "",
    age: "",
  });

  const handelSubmit = (event: FormEvent) => {
    event.preventDefault();

    console.log(person);
  };

  return (
    <div>
      <form onSubmit={(event) => handelSubmit(event)}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            onChange={(event) => {
              setPerson({ ...person, name: event.target.value });
            }}
            value={person.name}
            id="name"
            type="text"
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="age" className="form-label">
            Age
          </label>
          <input
            onChange={(event) => {
              setPerson({ ...person, age: event.target.value });
            }}
            value={person.age}
            id="age"
            type="number"
            className="form-control"
          />
        </div>

        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default FormUseState;
