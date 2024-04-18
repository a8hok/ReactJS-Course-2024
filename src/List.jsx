import { useEffect, useState } from "react";


function List() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      console.log("data", data);

      // setLoading(false);
      setUser(data);
    };
    fetchUser();
  }, []);
  return (
    <>
      {user.length > 0 &&
        user.map((obj) => (
          <div key={obj.id}>
            <h1>{obj.name}</h1>
            <p>{obj.email}</p>
            <p>{obj.testing.test}</p>
          </div>
        ))}
    </>
  );
}

export default List;
