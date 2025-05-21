"use client";

import { ReactElement } from "react";
import ErrorIcon from "@mui/icons-material/Error";
import Search from "@/components/Search/index";
import { SearchHeroProps } from "./types";

import styles from "./search-hero.module.css";

const SearchHero = ({
  error,
  isExpanded,
}: SearchHeroProps): ReactElement => {
  return (
    <div className={isExpanded ? styles["hero--expanded"] :  styles["hero--collapsed"]}>
      <Search />

      {error && (
        <span className={styles["hero__error"]}>
          <ErrorIcon /> {error}
        </span>
      )}
    </div>
  )
}

export default SearchHero;
