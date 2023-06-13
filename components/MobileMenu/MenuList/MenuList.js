import css from "./MenuList.module.scss";
import Link from "next/link";
import { FiChevronRight } from "react-icons/fi";
import cx from "classnames";
import { useState } from "react";

export default function MenuList({ objectName, isAccordion }) {
  const [isOpen, setIsOpen] = useState(false);

  const companyInfo = {
    header: "Інформація про компанію",
    list: [
      "Про нас",
      "Умови використання сайту",
      "Вакансії",
      "Контакти",
      "Усі категорії",
      "ROZETKA.PL",
    ],
  };

  const help = {
    header: "Допомога",
    list: [
      "Доставка та оплата",
      "Кредит",
      "Гарантія",
      "Повернення товару",
      "Сервісні центри",
    ],
  };

  const services = {
    header: "Сервіси",
    list: [
      "Бонусний рахунок",
      "Rozetka Premium",
      "Подарункові сертифікати",
      "Rozetka обмін",
    ],
  };

  const forPartners = {
    header: "Партнерам",
    list: [
      "Продавати на Розетці",
      "Співпраця з нами",
      "Франчайзинг",
      "Оренда приміщень",
    ],
  };

  const decideObject = () => {
    switch (objectName) {
      case "companyInfo":
        return companyInfo;
      case "help":
        return help;
      case "services":
        return services;
      case "forPartners":
        return forPartners;
    }
  };

  const object = decideObject();

  return (
    <div className={css.container}>
      <div className={css.headerWrap}>
        <div className={css.header}>{object.header}</div>
        {isAccordion && (
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
