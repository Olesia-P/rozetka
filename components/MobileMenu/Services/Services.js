import css from "./Services.module.scss";
import Link from "next/link";
import { FiChevronRight } from "react-icons/fi";
import cx from "classnames";
import { useState } from "react";

export default function Services() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={css.container}>
      <div className={css.headerWrap}>
        <div className={css.header}>Сервіси</div>
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
          <a className={css.link}>Бонусний рахунок</a>
        </Link>
        <Link href="/">
          <a className={css.link}>Rozetka Premium</a>
        </Link>
        <Link href="/">
          <a className={css.link}>Подарункові сертифікати</a>
        </Link>
        <Link href="/">
          <a className={css.link}>Rozetka обмін</a>
        </Link>
      </div>
    </div>
  );
}
