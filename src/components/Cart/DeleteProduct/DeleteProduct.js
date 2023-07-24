import css from "./DeleteProduct.module.scss";
import cx from "classnames";
import { MdDeleteOutline } from "react-icons/md";
import { useDispatch } from "react-redux";
import { deleteFromCart } from "../../../store/modules/cartSlice";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useState } from "react";

export default function DeleteProduct({ productId }) {
  const dispatch = useDispatch();
  const [isOpenDelete, setIsOpenDelete] = useState(false);
  return (
    <>
      <div
        className={cx(css.overlay, isOpenDelete && css.openDelete)}
        onClick={() => {
          if (isOpenDelete) {
            setIsOpenDelete(false);
          }
        }}
      ></div>
      <div className={css.deleteBtnContainer}>
        <BsThreeDotsVertical
          className={css.deleteBtn}
          onClick={() => setIsOpenDelete(true)}
        />
      </div>
      <div
        className={cx(css.cardDelete, isOpenDelete && css.openDelete)}
        onClick={() => {
          dispatch(deleteFromCart(productId));
        }}
      >
        <MdDeleteOutline className={css.icon} />
        <div className={css.caption}>Видалити</div>
      </div>
    </>
  );
}
