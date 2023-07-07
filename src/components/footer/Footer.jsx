import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
export default function Footer() {
  return (
    <div className={styles.container}>
      <div> @shubhamraut.me . All Rights Reserved </div>
      <div>
        <Image src="/1.png" alt="shubham Facebook" width={15} height={15} />
        <Image src="/2.png" alt="shubham Insta" width={15} height={15} />
        <Image src="/3.png" alt="shubham Twitter" width={15} height={15} />
        <Image src="/4.png" alt="shubham YT" width={15} height={15} />
      </div>
    </div>
  );
}
