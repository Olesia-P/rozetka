import css from "./ForPartners.module.scss";
import Link from "next/link";
import { FiChevronRight } from "react-icons/fi";
import cx from "classnames";
import { useState } from "react";

export default function ForPartners() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={css.container}>
      <div className={css.headerWrap}>
        <div className={css.header}>Партнерам</div>
        <div className={css.chevronWrap}>
          <FiChevronRight
            className={cx(
              css.chevron,
              isOpen === true && css.rotateOpened,
              isOpen === false && css.rotateClosed
            )}
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          />
        </div>
      </div>
      <div className={cx(css.linkWrap, isOpen && css.openedList)}>
        <Link href="/">
          <a className={css.link}>Продавати на Розетці</a>
        </Link>
        <Link href="/">
          <a className={css.link}>Співпраця з нами</a>
        </Link>
        <Link href="/">
          <a className={css.link}>Франчайзинг</a>
        </Link>
        <Link href="/">
          <a className={css.link}>Оренда приміщень</a>
        </Link>
      </div>
    </div>
  );
}
