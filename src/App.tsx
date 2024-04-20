import useUsers from "./hooks/useUsers";
import userService, { User } from "./services/user-service";

function App() {
  const { users, isLoading, error, setUsers, setLoading, setError } =
    useUsers();

  const originalUsers = [...users];

  const addUser = () => {
    const newUser: User = { id: 0, name: "Mosh" };
    setUsers([newUser, ...users]);

    userService
      .create<User>(newUser)
      .then(({ data: savedUser }) => setUsers([savedUser, ...users]))
      .catch((err) => {
        setError(err.message);
        setUsers(originalUsers);
      });
  };

  const updateUser = (user: any) => {
    const originalUsers = [...users];
    const updatedUser = { ...user, name: user.name + "!!" };
    // setUsers(users.map((u) => (u.id === user.id ? updatedUser : u)));

    userService.updateUser<User>(updatedUser).catch((err) => {
      setError(err.message);
      setUsers(originalUsers);
    });
  };

  const deleteUser = (user: User) => {
    const originalUsers = [...users];

    setUsers(users.filter((u) => u.id !== user.id));

    userService.delete(user.id).catch((err) => {
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
                onClick={(e) => deleteUser(user)}
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
