import css from "./Services.module.scss";
import Link from "next/link";
import { FiChevronRight } from "react-icons/fi";
import cx from "classnames";
import { useState } from "react";

export default function Services() {
  const [isList, setIsList] = useState(false);

  return (
    <div className={css.container}>
      <div className={css.headerWrap}>
        <div className={css.header}>Сервіси</div>
        <div className={css.chevronWrap}>
          <FiChevronRight
            className={cx(
              css.chevron,
              isList === true && css.rotateOpened,
              isList === false && css.rotateClosed
            )}
            onClick={() => {
              setIsList(!isList);
            }}
          />
        </div>
      </div>
      {isList && (
        <div
          className={cx(
            css.linkWrap,
            isList === true && css.animation,
            css.drawerDown,
            css.down
            // isList === false && css.animation,
            // css.drawerUp,
            // css.up
          )}
        >
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
      )}
    </div>
  );
}
