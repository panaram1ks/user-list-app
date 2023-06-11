import listStyle from "./ListUsers.module.css";
import User from "../User/User";

const ListUsers = (props) => {
  if (props.kitUsers.length > 0) {
    console.log(props.kitUsers);
    return
    
      for (let us of props.kitUsers) {
        {<User content={us}></User>};
      }
    
  } else {
    return <div className={listStyle.div}>List users is empty</div>;
  }
};

export default ListUsers;
