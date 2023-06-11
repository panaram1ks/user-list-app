import Card from "../UI/Card";
import styles from "./CreateUser.module.css";
import Button from "../UI/Button";
import { useState } from "react";
import ErrorModel from "../UI/ErrorModel";

const CreateUser = (props) => {
  const [inputName, setInputName] = useState("");
  const [inputAge, setInputAge] = useState("");

  const createUserHandler = (event) => {
    event.preventDefault();
    if (inputName.trim().length === 0 || inputAge.trim().length === 0) {
      return;
    }
    if (+inputAge < 1) {
      return;
    }

    console.log(inputName, inputAge);
    props.onCreateUser(inputName, inputAge);

    setInputName("");
    setInputAge("");
  };

  const nameChangeHandler = (event) => {
    setInputName(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setInputAge(event.target.value);
  };

  return (
    <div>
      <ErrorModel
        title="Error heppend"
        message="Someting went wrong"
      ></ErrorModel>
      <Card className={styles.input}>
        <form onSubmit={createUserHandler}>
          <label>Name</label>
          <input
            id="name"
            type="text"
            onChange={nameChangeHandler}
            value={inputName}
          />
          <label>Age</label>
          <input
            id="age"
            type="number"
            onChange={ageChangeHandler}
            value={inputAge}
          />

          <Button type="submit">Add user</Button>
        </form>
      </Card>
    </div>
  );
};

export default CreateUser;
