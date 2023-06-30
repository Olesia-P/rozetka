import css from "./MixedPurposeList.module.scss";
import { BsQuestionCircle } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
import { GiShop } from "react-icons/gi";
import cx from "classnames";

export default function MixedPurposeList() {
  const list = [
    {
      caption: "Довідковий центр",
      icon: <BsQuestionCircle />,
    },
    {
      caption: "Чат з ROZETKA",
      icon: <FaTelegramPlane />,
    },
    {
      caption: "Точки видачі Rozetka",
      icon: <GiShop />,
    },
  ];

  return (
    <div className={css.container}>
      {list.map((element) => (
        <div
          key={element.caption}
          className={cx(
            css.listItem,
            element.caption.includes("Чат") && css.green
          )}
        >
          <div
            className={cx(
              css.icon,
              element.caption.includes("Чат") && css.green
            )}
          >
            {element.icon}
          </div>
          <div className={css.caption}>{element.caption}</div>
        </div>
      ))}
    </div>
  );
}
