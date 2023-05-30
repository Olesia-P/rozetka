import css from "./Chat.module.scss";
import { FaTelegramPlane } from "react-icons/fa";

export default function Chat() {
  return (
    <div className={css.container}>
      <FaTelegramPlane className={css.logo} />
      <a href="https://t.me/Rozetka_helpBot?start=src=hc" className={css.link}>
        Чат з ROZETKA
      </a>
    </div>
  );
}
