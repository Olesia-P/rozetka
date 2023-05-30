import css from "./ReferenceCenter.module.scss";
import { BsQuestionCircle } from "react-icons/bs";

export default function ReferenceCenter() {
  return (
    <div className={css.container}>
      <BsQuestionCircle className={css.logo} />
      <div className={css.link}>Довідковий центр</div>
    </div>
  );
}
