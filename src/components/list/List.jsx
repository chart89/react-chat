import ChatList from "./chatlist/ChatList";
import styles from "./List.module.scss";
import UserInfo from "./userinfo/UserInfo";

const List = () => {
  return (
    <div className={styles.list}>
      <UserInfo />
      <ChatList />
    </div>
  );
};

export default List;
