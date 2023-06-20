import css from "./DeleteProduct.module.scss";
import cx from "classnames";
import { MdDeleteOutline } from "react-icons/md";
import { useDispatch } from "react-redux";
import { deleteFromCart } from "../../../store/modules/cartSlice";

export default function DeleteProduct({ isOpenDelete, productId }) {
  const dispatch = useDispatch();
  return (
    <div
      className={cx(css.cardDelete, isOpenDelete && css.openDelete)}
      onClick={() => {
        dispatch(deleteFromCart(productId));
        // dispatch(deleteFromCost());
      }}
    >
      <MdDeleteOutline className={css.icon} />
      <div className={css.caption}>Видалити</div>
    </div>
  );
}
