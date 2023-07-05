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
        <a href="">
          <FaFacebookF className={cx(css.icon, css.facebook)} />
        </a>
        <a href="">
          <FaTwitter className={cx(css.icon, css.twitter)} />
        </a>
        <a href="">
          <AiFillYoutube className={cx(css.icon, css.youtube)} />
        </a>
        <a href="">
          <AiOutlineInstagram className={cx(css.icon, css.instagram)} />
        </a>
        <a href="">
          <FaViber className={cx(css.icon, css.viber)} />
        </a>
        <a href="">
          <FaTelegramPlane className={cx(css.icon, css.telegram)} />
        </a>
      </div>
    </div>
  );
}
