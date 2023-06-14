import css from "./MenuList.module.scss";
import Link from "next/link";
import { FiChevronRight } from "react-icons/fi";
import cx from "classnames";
import { useState } from "react";

export default function MenuList({ object, isAccordion }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={css.container}>
      <div className={css.headerWrap}>
        <div className={css.header}>{object.header}</div>
        {isAccordion && (
          <div className={css.chevronWrap}>
            <FiChevronRight
              className={cx(css.chevron, isOpen === true && css.openedList)}
              onClick={() => {
                setIsOpen((state) => !state);
              }}
            />
          </div>
        )}
      </div>
      <div
        className={cx(
          css.linkWrap,
          isAccordion && css.accordion,
          !isAccordion && css.notAccordion,
          isOpen && css.openedList
        )}
      >
        {object.list.map((element) => (
          <Link key={element} href="/">
            <a className={css.link}>{element}</a>
          </Link>
        ))}
      </div>
    </div>
  );
}
