import css from "./CardProduct.module.scss";
import Link from "next/link";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { useDispatch } from "react-redux";
import {
  plusToQuantity,
  minusToQuantity,
  updateProductCost,
} from "../../../store/modules/cartSlice";
import { deleteFromCost } from "../../../store/modules/costSlice";
import DeleteProduct from "../DeleteProduct/DeleteProduct";

export default function CardProduct({ cart }) {
  const dispatch = useDispatch();

  return (
    <div>
      {cart.products.map((element) => (
        <div key={element.id}>
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

            <DeleteProduct productId={element.id} />
          </div>

          <div className={css.orderDetailsCard}>
            <div className={css.counterContainer}>
              <div className={css.counterBtn}>
                <AiOutlineMinus
                  className={css.minusBtn}
                  onClick={() => {
                    dispatch(minusToQuantity(element.id));
                    dispatch(updateProductCost(element.id));
                  }}
                />
              </div>
              <div className={css.counter}>{element.quantity}</div>
              <div className={css.counterBtn}>
                <AiOutlinePlus
                  className={css.plusBtn}
                  onClick={() => {
                    dispatch(plusToQuantity(element.id));
                    dispatch(updateProductCost(element.id));
                  }}
                />
              </div>
            </div>
            <div className={css.priceContainer}>
              <div className={css.oldPrice}>{element.oldCost} ₴</div>
              <div className={css.currentPrice}>{element.currentCost} ₴</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
