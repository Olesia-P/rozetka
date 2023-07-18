import { useDispatch } from "react-redux";
import css from "./ReferenceCenter.module.scss";
import { BsQuestionCircle } from "react-icons/bs";
import { changeIsReferenceCenterOpen } from "../../../store/modules/commonOpeningSlice";

export default function ReferenceCenter() {
  const dispatch = useDispatch();

  return (
    <div
      className={css.container}
      onClick={() => dispatch(changeIsReferenceCenterOpen(true))}
    >
      <BsQuestionCircle className={css.logo} />
      <div className={css.link}>Довідковий центр</div>
    </div>
  );
}
