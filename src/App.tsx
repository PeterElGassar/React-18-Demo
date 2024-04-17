import axios from "axios";
import { useEffect, useState } from "react";

type User = {
  id: number;
  name: string;
};
function App() {
  const [error, setError] = useState("");
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    // cancelling an http request
    const controller = new AbortController();
    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/users")
      .then(({ data: usersData }) => setUsers(usersData))
      .catch((err) => setError(err.message));

    return () => controller.abort();
  }, []);

  const originalUsers = [...users];

  let isLoading = false;
  const addUser = () => {
    const newUser: User = { id: 0, name: "Mosh" };
    // setUsers([newUser, ...users]);
    axios
      .post("https://jsonplaceholder.typicode.com/users", newUser)
      .then(({ data: savedUser }) => setUsers([savedUser, ...users]))
      .catch((err) => {
        setError(err.message);
        setUsers(originalUsers);
      });
  };

  const updateUser = (user: any) => {
    const updatedUser = { ...user, name: user.name + "!!" };
    // setUsers(users.map((u) => (u.id === user.id ? updatedUser : u)));
    axios
      .patch(
        `https://jsonplaceholder.typicode.com/users/${user.id}`,
        updatedUser
      )
      .catch((err) => {
        setError(err.message);
        setUsers(originalUsers);
      });
  };

  return (
    <div>
      {error && <p className="text-danger">{error} </p>}
      {isLoading && <div className="spinner-border"> </div>}
      <button className="btn btn-primary mb-3" onClick={addUser}>
        Add
      </button>

      <ul className="list-group">
        {users.map((user: User) => (
          <li
            key={user.id}
            className="list-group-item d-flex justify-content-between"
          >
            {user.name}

            <div>
              <button
                className="mx-1 btn btn-outline-danger"
                onClick={() => console.log()}
              >
                delete
              </button>
              <button
                className="btn btn-outline-secondary"
                onClick={() => updateUser(user)}
              >
                update
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
