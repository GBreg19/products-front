import axios from "axios";
import React, {
  Fragment,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import Input from "./Input";
import Vardishvili from "./Vardishvili";

const Vardishi = () => {
  // const [data, setData] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(null);

  const [user, setUser] = useState({
    name: "",
    lastname: "",
    age: "",
  });
  const [userData, setUserData] = useState([]);
  // console.log("Mshobela");
  // const [x, setX] = useState("Random Array");

  // const titleChangeHandler = useCallback(() => {
  //   setX("Sorted Array");
  // }, []);

  // const randomArr = useMemo(() => [1, 10, 5, 12, 3, 7, 2], []);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setUserData([...userData, user]);
    setUser({ name: "", lastname: "", age: "" });

    try {
      const response = await axios.post(
        "https://react-http-8a24f-default-rtdb.europe-west1.firebasedatabase.app/users.json",
        userData
      );
    } catch (e) {
      console.log(e);
    }
  };

  const onChangeHandler = (e) => {
    const { name, value } = e.target;

    setUser({ ...user, [name]: value });
  };

  return (
    <Fragment>
      {/* <Vardishvili data={data} /> */}
      <form onSubmit={onSubmitHandler}>
        <Input
          type="text"
          name="name"
          value={user.name}
          onChange={onChangeHandler}
          placeholder="name"
        />
        <Input
          type="text"
          name="lastname"
          value={user.lastname}
          onChange={onChangeHandler}
          placeholder="lastname"
        />
        <Input
          type="number"
          name="age"
          value={user.age}
          onChange={onChangeHandler}
          placeholder="age"
        />
        <button>Submit</button>
      </form>
    </Fragment>
  );
};

export default Vardishi;
