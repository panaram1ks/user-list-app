import Card from "../UI/Card";

const CreateUser = (props) => {
  const createUserHandler = (event) => {
    event.preventDefault();
  };

  return (
    <Card>
      <form onSubmit={createUserHandler}>
        <label>Name</label>
        <input id="name" type="text" />
        <label>Age</label>
        <input id="age" type="number" />

        <button type="submit">Add user</button>
      </form>
    </Card>
  );
};

export default CreateUser;
