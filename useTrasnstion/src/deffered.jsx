import { useDeferredValue, useState, useId } from "react";
import "./App.css";
import { USERS } from "./user";

function App() {
  const [users, setUsers] = useState(USERS);
  const deferredUsers = useDeferredValue(users, { timeoutMs: 500 });
  const id = useId();
  const handleChange = (e) => {
    setUsers(USERS.filter((user) => user.username.includes(e.target.value)));
  };
  return (
    <>
      <input
        style={{ width: "400px", height: "40px", borderRadius: "10px" }}
        type="text"
        placeholder="Search user"
        onChange={handleChange}
      />
      <input type="text" id={id}/>

      <br />
      <br />
      <br />
      <br />
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {deferredUsers.length > 0 ? (
          deferredUsers.map((user) => (
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
    </>
  );
}

export default App;
