import Head from "next/head";
import styles from "../styles/page.module.css";
import Link from "next/link";
import Ping from "./ping/page";
export default function Home() {

  return (
  <>
<div className={styles.homeDiv}>YOOOOOOOOOOOOOOOOOO</div>
    <Link href="/ping">play Ping</Link>
    </>
  )

}
