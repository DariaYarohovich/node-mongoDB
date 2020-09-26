import React, { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import "./products.css";

const productsList = [
  {
    _id: 2,
    title: "Book",
    description: "An interesting book",
    price: "$12,76",
    image:
      "https://cdn.elearningindustry.com/wp-content/uploads/2016/05/top-10-books-every-college-student-read-1024x640.jpeg",
  },
  {
    _id: 3,
    title: "New Book",
    description: "An interesting book",
    price: "$128,76",
    image:
      "https://cdn.elearningindustry.com/wp-content/uploads/2016/05/top-10-books-every-college-student-read-1024x640.jpeg",
  },
];

export const Products = React.memo(() => {
  const [products, setProducts] = useState([]);
  React.useEffect(() => {
    // get products
    setProducts(productsList);
  }, []);

  const deleteProduct = useCallback((id) => {
    // delete product by id
  }, []);

  return !products.length ? (
    "There are no products"
  ) : (
    <div className="products-list">
      {products.map((product) => (
        <Product key={product._id} {...product} handleDelete={deleteProduct} />
      ))}
    </div>
  );
});

const Product = React.memo(
  ({ _id, title, description, price, image, handleDelete }) => {
    const deleteProduct = useCallback(() => {
      handleDelete(_id);
    }, [handleDelete, _id]);

    return (
      <article className="product">
        <img className="product__img" src={image} alt={title} />
        <div className="product__meta">
          <Link to={`/products/${_id}`} className="product__title">
            {title}
          </Link>
          <p className="product__desc">{description}</p>
          <p className="product__price">{price}</p>
          <div className="product__buttons">
            <button type="button">Eit</button>
            <button type="button" onClick={deleteProduct}>
              Delete
            </button>
          </div>
        </div>
      </article>
    );
  }
);
