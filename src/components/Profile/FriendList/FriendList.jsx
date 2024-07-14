import s from "./FriendList.module.css";
const FriendList = (friends) => {
  return (
    <ul>
      {/* Кількість li залежить від кількості об'єктів в масиві */}
      <li>
        <FriendListItem />
      </li>
    </ul>
  );
};

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div>
      <img src={avatar} alt="Avatar" width="48" />
      <p>{name}</p>
      <p className="isOnlune = true ? s.green : s.red">Friend status</p>
    </div>
  );
};

export default FriendList;
