import Card from "../UI/Card";
import styles from "./CreateUser.module.css";

const UserList = (props) => {
  return (
    <Card className={styles.user}>
      <ul>
        {props.users.map((user) => (
          <li>
            {user.name} - {user.age} years
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UserList;
