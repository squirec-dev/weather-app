import { ReactElement } from "react";
import Image from "next/image";

import styles from "./header.module.css";

const Header = (): ReactElement => {
  return (
    <header>
      <div className="container">
        <h1 className={styles["logo"]}>
          <Image
            className={styles["logo__icon"]}
            src="/duck.svg"
            alt="logo"
            width="0"
            height="0"
            style={{ width: "40px", height: "auto" }}
          />
          
          Weather for ducks?
        </h1>
      </div>
    </header>
  )
}

export default Header;
