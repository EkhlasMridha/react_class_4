import { useEffect, useRef, useState } from "react";
import TodoList from "../../components/TodoList";

const Dashboard = () => {
  const [value, setValue] = useState([]);
  const isDataFetched = useRef<boolean>(false);

  useEffect(() => {
    if (isDataFetched.current) return;

    fetchUserData().then((res) => {
      setValue(res);
    });
    isDataFetched.current = true;
  }, []);

  const fetchUserData = async () => {
    let responseData = await fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .catch((err) => console.log(err));

    return responseData;
  };

  return (
    <div className="list-container">
      <TodoList todoList={value} />
    </div>
  );
};

export default Dashboard;
