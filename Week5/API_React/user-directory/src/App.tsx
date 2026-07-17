import { useEffect, useState } from "react";
import UserList from "./components/UserLists";
import SearchBar from "./components/SearchBar";

type User = {
  id: number;
  name: string;
  email: string;
  phone: string;
  company: {
    name: string;
  };
};

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }

        const data = await response.json();
        setUsers(data);
      } catch {
        setError("Failed to fetch users");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  // Filter users based on search text
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <h1>User Directory</h1>

      <SearchBar search={search} setSearch={setSearch} />

      {loading && <h2>Loading...</h2>}

      {error && <h2>{error}</h2>}

      {!loading && !error && (
        <UserList users={filteredUsers} />
      )}
    </div>
  );
}

export default App;