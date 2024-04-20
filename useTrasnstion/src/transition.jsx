import { useState, useTransition } from "react";
import "./App.css";
import { USERS } from "./user";

function App() {
  const [users, setUsers] = useState(USERS);
  const [pending, startTransition] = useTransition();
  const handleChange = (e) => {
    startTransition(() => {
      setUsers(USERS.filter((user) => user.username.includes(e.target.value)));
    });
  };
  return (
    <>
      <input
        style={{ width: "400px", height: "40px", borderRadius: "10px" }}
        type="text"
        placeholder="Search user"
        onChange={handleChange}
      />
      <br />
      <br />
      <br />
      <br />
      {pending ? (
        <p>Loading...</p>
      ) : (
        <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
          {users.length > 0 ? (
            users.map((user) => (
              <div key={user.userId}>
                <img
                  src={user.avatar}
                  alt="avatar"
                  style={{ height: "100px", width: "100px" }}
                />
                <p>{user.username}</p>
              </div>
            ))
          ) : (
            <p>No user found</p>
          )}
        </div>
      )}
    </>
  );
}

export default App;
