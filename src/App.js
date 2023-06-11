import CreateUser from "./components/Users/CreateUser";
import UserList from "./components/Users/UserList";

function App() {
  return (
    <div>
      <CreateUser></CreateUser>
      <UserList users={[{name: "adsf", age: 19}]}></UserList>
    </div>
  );
}

export default App;
