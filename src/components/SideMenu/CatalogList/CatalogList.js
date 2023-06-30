import css from "./CatalogList.module.scss";
import {
  AiOutlineLaptop,
  AiOutlinePaperClip,
  AiOutlineTag,
} from "react-icons/ai";
import { BsPhone } from "react-icons/bs";
import { FaPaw } from "react-icons/fa";
import {
  GiWashingMachine,
  GiDrill,
  GiLipstick,
  GiBoltShield,
} from "react-icons/gi";
import {
  LuArmchair,
  LuBath,
  LuShovel,
  LuShirt,
  LuGamepad2,
} from "react-icons/lu";
import { MdSportsTennis } from "react-icons/md";
import { RiBearSmileLine } from "react-icons/ri";
import { BiDrink } from "react-icons/bi";

export default function CatalogList() {
  const list = [
    { caption: "Ноутбуки та комп'ютери", icon: <AiOutlineLaptop /> },
    { caption: "Смартфони, ТВ і електроніка", icon: <BsPhone /> },
    { caption: "Товари для геймерів", icon: <LuGamepad2 /> },
    { caption: "Побутова техніка", icon: <GiWashingMachine /> },
    { caption: "Товари для дому", icon: <LuArmchair /> },
    { caption: "Інструменти та автотовари", icon: <GiDrill /> },
    { caption: "Сантехніка та ремонт", icon: <LuBath /> },
    { caption: "Дача, сад і город", icon: <LuShovel /> },
    { caption: "Спорт і захоплення", icon: <MdSportsTennis /> },
    { caption: "Одяг, взуття та прикраси", icon: <LuShirt /> },
    { caption: "Краса та здоров'я", icon: <GiLipstick /> },
    { caption: "Дитячі товари", icon: <RiBearSmileLine /> },
    { caption: "Зоотовари", icon: <FaPaw /> },
    { caption: "Офіс, школа, книги", icon: <AiOutlinePaperClip /> },
    { caption: "Алкогольні напої та продукти", icon: <BiDrink /> },
    { caption: "Нашим захисникам", icon: <GiBoltShield /> },
    { caption: "Акція", icon: <AiOutlineTag /> },
  ];
  //   console.log(list[1].caption);
  return (
    <div className={css.container}>
      {list.map((element) => (
        <div key={element.caption} className={css.listItem}>
          <div className={css.icon}>{element.icon}</div>
          <div className={css.caption}>{element.caption}</div>
        </div>
      ))}
    </div>
  );
}
