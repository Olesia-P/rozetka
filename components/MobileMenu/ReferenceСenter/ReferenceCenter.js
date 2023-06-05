import css from "./ReferenceCenter.module.scss";
import { BsQuestionCircle } from "react-icons/bs";
import Link from "next/link";

export default function ReferenceCenter() {
  return (
    <div className={css.container}>
      <BsQuestionCircle className={css.logo} />
      <Link href="https://help.rozetka.com.ua/">
        <a className={css.link}>Довідковий центр</a>
      </Link>
    </div>
  );
}
