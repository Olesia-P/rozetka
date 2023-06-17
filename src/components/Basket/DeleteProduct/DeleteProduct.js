import css from "./DeleteProduct.module.scss";
import cx from "classnames";
import { MdDeleteOutline } from "react-icons/md";

export default function DeleteProduct({
  deleteFromBasketObject,
  deleteFromCost,
  index,
  isOpenDelete,
}) {
  return (
    <div
      className={cx(css.cardDelete, isOpenDelete && css.openDelete)}
      onClick={() => {
        dispatch(deleteFromBasketObject(index));
        dispatch(deleteFromCost(index));
      }}
    >
      <MdDeleteOutline className={css.icon} />
      <div className={css.caption}>Видалити</div>
    </div>
  );
}
