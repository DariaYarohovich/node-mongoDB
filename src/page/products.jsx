import React, { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { productsList } from "../stub-data";
import styles from "./products.module.css";

export const Products = React.memo(() => {
  const [products, setProducts] = useState([]);
  React.useEffect(() => {
    // get products
    setProducts(productsList);
  }, []);

  const deleteProduct = useCallback(id => {
    // delete product by id
  }, []);

  return !products.length ? (
    "There are no products"
  ) : (
    <div className="products-list">
      {products.map(product => (
        <Product key={product._id} {...product} handleDelete={deleteProduct} />
      ))}
    </div>
  );
});

const Product = React.memo(
  ({ _id, title, description, price, image, handleDelete }) => {
    const { product, img, title: titleStyle, desc, price: priceStyle } = styles;

    const deleteProduct = useCallback(() => {
      handleDelete(_id);
    }, [handleDelete, _id]);

    return (
      <article className={product}>
        <img className={img} src={image} alt={title} />
        <div>
          <Link to={`/products/${_id}`} className={titleStyle}>
            {title}
          </Link>
          <p className={desc}>{description}</p>
          <p className={priceStyle}>{price}</p>
          <div>
            <Link to={`/products/${_id}/edit`}>Edit</Link>
            <button type="button" onClick={deleteProduct}>
              Delete
            </button>
          </div>
        </div>
      </article>
    );
  }
);
