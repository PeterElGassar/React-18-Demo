import { useEffect, useState } from "react";
import userService, { User } from "../services/user-service";
import { CanceledError } from "../services/api-client";

const useUsers = () => {
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    setLoading(true);

    const { request, cancel } = userService.getAll<User>();

    request
      .then((res) => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(true);
      });

    // cancelling an http request
    return () => cancel();
  }, []);
  return { users, isLoading, error, setUsers, setLoading, setError };
};

export default useUsers;
