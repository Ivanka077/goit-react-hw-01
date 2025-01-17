import Profile from "./components/Profile/Profile";
import FriendList from "./components/Profile/FriendList/FriendList";
import userData from "./userData.json";

const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
    </>
  );
};

export default App;
