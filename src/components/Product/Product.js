import css from "./Product.module.scss";
import cx from "classnames";
import { SlBasket } from "react-icons/sl";
import { useDispatch } from "react-redux";
import { addToBasketObject } from "../../store/modules/basketObjectSlice";
import { addToCost } from "../../store/modules/costSlice";
import { useSelector } from "react-redux";

export default function Product() {
  const dispatch = useDispatch();
  const product1 = {
    name: "Кавомашина KRUPS Essential EA816570",
    img: "https://content.rozetka.com.ua/goods/images/preview/160433459.jpg",
    oldPrice: "22 429",
    currentPrice: "12 999",
    currentPriceInt: 12999,
    discount: 42,
    quantity: 1,
  };

  const basketObject = useSelector((state) => state.basketObject.value);
  const cost = useSelector((state) => state.cost.value);
  console.log(basketObject);

  return (
    <div
      className={cx(css.btn, "mobile")}
      onClick={() => {
        dispatch(addToBasketObject(product1));
        dispatch(addToCost(product1.currentPriceInt * product1.quantity));
        console.log(product1.quantity);
      }}
    >
      <SlBasket className={css.basket} /> Купити
    </div>
  );
}
