import Card from "../UI/Card";
import styles from "./CreateUser.module.css";
import Button from "../UI/Button";

const CreateUser = (props) => {
  const createUserHandler = (event) => {
    event.preventDefault();
  };

  return (
    <Card className={styles.input}>
      <form onSubmit={createUserHandler}>
        <label>Name</label>
        <input id="name" type="text" />
        <label>Age</label>
        <input id="age" type="number" />

        <Button type="submit" onClick={createUserHandler}>
          Add user
        </Button>
      </form>
    </Card>
  );
};

export default CreateUser;
