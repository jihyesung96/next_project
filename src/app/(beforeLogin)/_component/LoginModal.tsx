import style from "@/app/(beforeLogin)/_component/loginModal.module.css";
import Image from "next/image";
import Logo from "../../../../public/Logo1.png";
import Link from "next/link";
import BackButton from "./BackButton";
import { redirect } from "next/navigation";

export default function LoginModal() {
  //server actions
  const submit = async (formData: FormData) => {
    "use server";
    // if (!formData.get("id")) {
    //   return { message: "no_id" };
    // }

    let shouldRedirect = false;
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/login`, {
        method: "post",
        body: formData,
        credentials: "include", //쿠키 저장할려면 필요함
      });
      console.log(response.status);
      console.log(await response.json());
      shouldRedirect = true;
    } catch (err) {
      console.error(err);
    }

    if (shouldRedirect) {
      redirect("/home"); // try/catch 문 안에서 사용하면 안됨
    }
  };

  return (
    <div className={style.modalBackground}>
      <div className={style.modal}>
        <div className={style.modalHeader}>
          <BackButton />
          <div className={style.Image}>
            <Image src={Logo} width={150} height={150} alt="logo" />
          </div>
          <form action={submit}>
            <div className={style.modalBody}>
              <input id="id" name="id" className={style.input} type="text" placeholder="Username" required />
              <input
                id="password"
                name="password"
                className={style.input}
                type="password"
                placeholder="*********"
                required
              />
            </div>
            <div className={style.modalOption}>
              <div className={style.check}>
                <input type="checkbox" />
                <span>Remember me</span>
              </div>
              <Link href="/our/help/password">Forgot Passwored?</Link>
            </div>
            <div className={style.modalFooter}>
              <button type="submit" className={style.actionButton}>
                L O G I N
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
