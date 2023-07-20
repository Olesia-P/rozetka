import css from "./SocialMedia.module.scss";
import cx from "classnames";

import { AiFillYoutube, AiOutlineInstagram } from "react-icons/ai";
import {
  FaViber,
  FaTelegramPlane,
  FaFacebookF,
  FaTwitter,
} from "react-icons/fa";

export default function SocialMedia({ size }) {
  return (
    <div className={css.container}>
      <div
        className={cx(
          css.header,
          size === "mobileMenu" && css.margBttm8,
          size === "sideMenu" && css.margBttm12
        )}
      >
        Ми в соціальних мережах
      </div>
      <div className={css.linksWrap}>
        <a href="https://www.facebook.com/rozetka.ua">
          <FaFacebookF className={cx(css.icon, css.facebook)} />
        </a>
        <a href="https://twitter.com/rozetka_ua">
          <FaTwitter className={cx(css.icon, css.twitter)} />
        </a>
        <a href="http://bit.ly/RZTK_UA">
          <AiFillYoutube className={cx(css.icon, css.youtube)} />
        </a>
        <a href="https://instagram.com/rozetkaua">
          <AiOutlineInstagram className={cx(css.icon, css.instagram)} />
        </a>
        <a href="https://invite.viber.com/?g2=AQB9mwM%2F5f%2FxJUlMxP4V9flr2%2BvXTC1MpxdGFZ0P6d%2Fs6Ws%2FFe%2FQtLiZwA4E28sj">
          <FaViber className={cx(css.icon, css.viber)} />
        </a>
        <a href="https://t.me/rrozetka">
          <FaTelegramPlane className={cx(css.icon, css.telegram)} />
        </a>
      </div>
    </div>
  );
}
