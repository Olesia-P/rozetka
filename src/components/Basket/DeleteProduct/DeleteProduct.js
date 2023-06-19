import css from "./DeleteProduct.module.scss";
import cx from "classnames";
import { MdDeleteOutline } from "react-icons/md";
import { useDispatch } from "react-redux";

export default function DeleteProduct({
  deleteFromBasketObject,
  deleteFromCost,
  index,
  isOpenDelete,
}) {
  const dispatch = useDispatch();
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
