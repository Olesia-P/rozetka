import css from "./CardProduct.module.scss";
import Link from "next/link";
import { BsThreeDotsVertical } from "react-icons/bs";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { useDispatch } from "react-redux";
import {
  deleteFromBasketObject,
  plusToQuantity,
  minusToQuantity,
} from "../../../store/modules/basketObjectSlice";
import { deleteFromCost } from "../../../store/modules/costSlice";
import DeleteProduct from "../DeleteProduct/DeleteProduct";

export default function CardProduct({
  basketObject,
  isOpenDelete,
  setIsOpenDelete,
}) {
  const dispatch = useDispatch();

  return (
    <div>
      {basketObject.map((element, index) => (
        <div key={index}>
          <div className={css.cardProduct}>
            <Link href="/">
              <a className={css.imgContainer}>
                <img src={element.img} className={css.img} />
                <div className={css.discoutIcon}>-{element.discount}%</div>
              </a>
            </Link>
            <Link href="/">
              <a className={css.productName}>{element.name}</a>
            </Link>
            <div className={css.deleteBtnContainer}>
              <BsThreeDotsVertical
                className={css.deleteBtn}
                onClick={() => setIsOpenDelete(true)}
              />
            </div>

            <DeleteProduct
              deleteFromBasketObject={deleteFromBasketObject}
              deleteFromCost={deleteFromCost}
              index={index}
              isOpenDelete={isOpenDelete}
            />
          </div>

          <div className={css.orderDetailsCard}>
            <div className={css.counterContainer}>
              <div className={css.counterBtn}>
                <AiOutlineMinus
                  className={css.minusBtn}
                  onClick={() => {
                    const trueIndex = basketObject.indexOf(element);
                    dispatch(minusToQuantity(trueIndex));
                  }}
                />
              </div>
              <div className={css.counter}>{element.quantity}</div>
              <div className={css.counterBtn}>
                <AiOutlinePlus
                  className={css.plusBtn}
                  onClick={() => {
                    const trueIndex = basketObject.indexOf(element);
                    dispatch(plusToQuantity(trueIndex));
                  }}
                />
              </div>
            </div>
            <div className={css.priceContainer}>
              <div className={css.oldPrice}>{element.oldPrice} ₴</div>
              <div className={css.newPrice}>{element.currentPrice} ₴</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
