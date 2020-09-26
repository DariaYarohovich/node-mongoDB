import React, { useEffect, useState } from "react";
import "./product.css";

export const Product = React.memo(() => {
  const [details, setDetails] = useState();
  useEffect(() => {
    // extract details by id
    setDetails();
  }, []);

  return details ? (
    <article className="product">
      <h2 className="product__title">{details.title}</h2>
      <img className="product__img" src={details.image} alt={details.title} />
      <p className="product__desc">{details.description}</p>
      <p className="product__price">{details.price}</p>
    </article>
  ) : null;
});
