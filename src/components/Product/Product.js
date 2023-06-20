import css from "./Product.module.scss";
import cx from "classnames";
import { SlBasket } from "react-icons/sl";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/modules/cartSlice";
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
    id: 333,
  };

  const product2 = {
    name: "Кавомашина KRUPS Essential EA816570",
    img: "https://content.rozetka.com.ua/goods/images/preview/160433459.jpg",
    oldPrice: "22 429",
    currentPrice: "12 999",
    currentPriceInt: 12999,
    discount: 42,
    quantity: 1,
    id: 444,
  };

  const cart = useSelector((state) => state.cart.value);
  const cost = useSelector((state) => state.cost.value);
  console.log(cart);

  return (
    <div
      className={cx(css.btn, "mobile-flex")}
      onClick={() => {
        dispatch(addToCart(product1));
        dispatch(addToCart(product2));
        dispatch(addToCost(product1.currentPriceInt * product1.quantity));
      }}
    >
      <SlBasket className={css.basket} /> Купити
    </div>
  );
}
