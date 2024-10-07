import Link from "next/link";
import Image from "next/image";
import style from "./main.module.css";
import Logo from "../../../../public/Logo1.png";

export default function Main() {
  return (
    <>
      <div className={style.left}>
        <Image src={Logo} alt="logo" width={250} height={250} />
      </div>
      <div className={style.right}>
        <h1>서로의 행복한 추억</h1>
        <h2>지금 기록하세요.</h2>
        <Link href="/our/join" className={style.signup}>
          Sign Up
        </Link>
        <h3>이미 추억을 기록하셨나요?</h3>
        <Link href="/login" className={style.login}>
          Sign in
        </Link>
      </div>
    </>
  );
}
