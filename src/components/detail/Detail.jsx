import styles from "./Detail.module.scss";
const Detail = () => {
  return (
    <div className={styles.detail}>
      <div className={styles.user}>
        <img src="./avatar.png" alt="" />
        <h2>Jane Doe</h2>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
      <div className={styles.info}>
        <div className={styles.option}>
          <div className={styles.title}>
            <span>Ustawienia</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <div className={styles.option}>
          <div className={styles.title}>
            <span>Ustawienia</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <div className={styles.option}>
          <div className={styles.title}>
            <span>Prywatność & pomoc</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <div className={styles.option}>
          <div className={styles.title}>
            <span>Udostępnij zdjęcie</span>
            <img src="./arrowDown.png" alt="" />
          </div>
          <div className={styles.photos}>
            <div className={styles.photoItem}>
              <div className={styles.photoDetail}>
                <img
                  src="https://images.pexels.com/photos/7001554/pexels-photo-7001554.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                />
                <span>photo_2024_2.png</span>
              </div>
              <img src="./download.png" className={styles.icon} alt="" />
            </div>
          </div>
        </div>
        <div className={styles.option}>
          <div className={styles.title}>
            <span>Udostępnij pliki</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <button>Zablokuj użytkownika</button>
        <button className={styles.logout}>Wyloguj</button>
      </div>
    </div>
  );
};

export default Detail;
