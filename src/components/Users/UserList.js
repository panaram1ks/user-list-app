import Card from "../UI/Card";
import styles from "./UserList.module.css";

const UserList = (props) => {
  return (
    <Card className={styles.user}>
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.age} years
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UserList;
