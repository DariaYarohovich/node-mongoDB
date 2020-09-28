import React, { useEffect, useState } from "react";
import { productsList } from "../stub-data";
import styles from "./product.module.css";

export const Product = React.memo(() => {
  const [details, setDetails] = useState();
  useEffect(() => {
    // extract details by id
    setDetails(productsList[0]);
  }, []);

  return details ? (
    <article className={styles.product}>
      <h2 className={styles.title}>{details.title}</h2>
      <p className={styles.price}>{details.price}</p>
      <img className={styles.img} src={details.image} alt={details.title} />
      <p className={styles.desc}>{details.description}</p>
    </article>
  ) : null;
});
