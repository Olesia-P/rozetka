import css from "./CardProduct.module.scss";
import Link from "next/link";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdDeleteOutline } from "react-icons/md";

export default function CardProduct() {
  return (
    <div className={css.cardProduct}>
      <Link href="/">
        <a className={css.imgContainer}>
          <img src="https://content.rozetka.com.ua/goods/images/medium/160433459.jpg" />
          <div className={css.discoutIcon}>-42%</div>
        </a>
      </Link>
      <Link href="/">
        <a className={css.productName}>Кавомашина KRUPS Essential EA816570</a>
      </Link>
      <div className={css.deleteBtnContainer}>
        <BsThreeDotsVertical className={css.deleteBtn} />
      </div>
      <div className={css.cardDelete}>
        <MdDeleteOutline className={css.icon} />
        <div className={css.caption}>Видалити</div>
      </div>
    </div>
  );
}
