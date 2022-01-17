import { useState, useEffect } from "react";
import UserCard from "components/Users/CardItem";
import Skeleton from "components/Skeleton";
import { getMultiUser, getUser } from "Api";
import { generateUser, initialUserData, newUserData } from "utils";
import "./style.css";

const Users = () => {
  const [list, setList] = useState(generateUser(0, 4));
  const [selected, setSelected] = useState(1);

  useEffect(() => {
    getMultiUser(list.length).then((data) => {
      setList((prev) => initialUserData(prev, data));
    });
  }, []);

  const selectHandler = (selectId) => {
    setSelected(selectId);
    if (selectId === list.length - 1) {
      setList((prev) => [...prev, ...generateUser(list.length)]);
      getUser().then((data) => {
        setList((prev) => newUserData(prev, data, selectId));
      });
    }
    if (selectId === list.length) {
      setList((prev) => [...prev, ...generateUser(list.length, 2)]);
      getMultiUser(2).then((data) => {
        setList((prev) => newUserData(prev, data, selectId));
      });
    }
  };
  return (
    <ul
      style={{
        left: selected > 3 ? `${-selected * 24 + 48}%` : 0,
      }}
    >
      {list.map((item) => (
        <li
          key={item.id}
          className={item.id === selected ? "selected" : ""}
          onClick={() => selectHandler(item.id)}
        >
          {item.isLoaded ? <UserCard DATA={item} /> : <Skeleton />}
        </li>
      ))}
    </ul>
  );
};
export default Users;
