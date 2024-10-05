import { useEffect, useRef, useState } from "react";
import styles from "./Chat.module.scss";
import EmojiPicker from "emoji-picker-react";

const Chat = () => {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");

  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const handleEmoji = (e) => {
    setText((prev) => prev + e.emoji);
    setOpen(false);
  };

  return (
    <div className={styles.chat}>
      <div className={styles.top}>
        <div className={styles.user}>
          <img src="./avatar.png" alt="" />
          <div className={styles.texts}>
            <span>John Doe</span>
            <p>Lorem ipsum ipsum</p>
          </div>
        </div>
        <div className={styles.icons}>
          <img src="./phone.png" alt="" />
          <img src="./video.png" alt="" />
          <img src="./info.png" alt="" />
        </div>
      </div>
      <div className={styles.center}>
        <div className={styles.message}>
          <img src="./avatar.png" alt="" />
          <div className={styles.texts}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id
              eleifend ligula. Etiam lacinia, risus pulvinar faucibus accumsan,
              felis nisi placerat sem, non pretium sem tellus ac turpis. Nunc
              convallis.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className={`${styles.message} ${styles.own}`}>
          <div className={styles.texts}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id
              eleifend ligula. Etiam lacinia, risus pulvinar faucibus accumsan,
              felis nisi placerat sem, non pretium sem tellus ac turpis. Nunc
              convallis.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className={styles.message}>
          <img src="./avatar.png" alt="" />
          <div className={styles.texts}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id
              eleifend ligula. Etiam lacinia, risus pulvinar faucibus accumsan,
              felis nisi placerat sem, non pretium sem tellus ac turpis. Nunc
              convallis.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className={`${styles.message} ${styles.own}`}>
          <div className={styles.texts}>
            <img
              src="https://images.pexels.com/photos/8725380/pexels-photo-8725380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id
              eleifend ligula. Etiam lacinia, risus pulvinar faucibus accumsan,
              felis nisi placerat sem, non pretium sem tellus ac turpis. Nunc
              convallis.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className={styles.message}>
          <img src="./avatar.png" alt="" />
          <div className={styles.texts}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id
              eleifend ligula. Etiam lacinia, risus pulvinar faucibus accumsan,
              felis nisi placerat sem, non pretium sem tellus ac turpis. Nunc
              convallis.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className={`${styles.message} ${styles.own}`}>
          <div className={styles.texts}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id
              eleifend ligula. Etiam lacinia, risus pulvinar faucibus accumsan,
              felis nisi placerat sem, non pretium sem tellus ac turpis. Nunc
              convallis.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div ref={endRef}></div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.icons}>
          <img src="./img.png" alt="" />
          <img src="./camera.png" alt="" />
          <img src="./mic.png" alt="" />
        </div>
        <input
          type="text"
          value={text}
          placeholder="Napisz wiadomość..."
          onChange={(e) => setText(e.target.value)}
        />
        <div className={styles.emoji}>
          <img
            src="./emoji.png"
            alt=""
            onClick={() => setOpen((prev) => !prev)}
          />
          <div className={styles.picker}>
            <EmojiPicker open={open} onEmojiClick={handleEmoji} />
          </div>
        </div>
        <button className={styles.sendButton}>Wyślij</button>
      </div>
    </div>
  );
};

export default Chat;
