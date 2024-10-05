import { useState } from "react";
import styles from "./ChatList.module.scss";

const ChatList = () => {
  const [addMode, setAddMode] = useState(false);
  return (
    <div className={styles.chatList}>
      <div className={styles.search}>
        <div className={styles.searchBar}>
          <img src="./search.png" alt="" />
          <input type="text" placeholder="Szukaj..." />
        </div>
        <img
          src={addMode ? "./minus.png" : "./plus.png"}
          alt=""
          className={styles.add}
          onClick={() => setAddMode((prev) => !prev)}
        />
      </div>
      <div className={styles.item}>
        <img src="./avatar.png" alt="" />
        <div className={styles.texts}>
          <span>John Doe</span>
          <p>Hello</p>
        </div>
      </div>
      <div className={styles.item}>
        <img src="./avatar.png" alt="" />
        <div className={styles.texts}>
          <span>John Doe</span>
          <p>Hello</p>
        </div>
      </div>
      <div className={styles.item}>
        <img src="./avatar.png" alt="" />
        <div className={styles.texts}>
          <span>John Doe</span>
          <p>Hello</p>
        </div>
      </div>
      <div className={styles.item}>
        <img src="./avatar.png" alt="" />
        <div className={styles.texts}>
          <span>John Doe</span>
          <p>Hello</p>
        </div>
      </div>
      <div className={styles.item}>
        <img src="./avatar.png" alt="" />
        <div className={styles.texts}>
          <span>John Doe</span>
          <p>Hello</p>
        </div>
      </div>
      <div className={styles.item}>
        <img src="./avatar.png" alt="" />
        <div className={styles.texts}>
          <span>John Doe</span>
          <p>Hello</p>
        </div>
      </div>
    </div>
  );
};

export default ChatList;
