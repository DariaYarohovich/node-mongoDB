import React, { useEffect, useState, useCallback } from "react";
import { productsList } from "../stub-data";
import { ProductForm } from "../components";

export const EditProduct = React.memo(() => {
  const [formData, setFormData] = useState();

  const productId = 2; // retrieve id from url

  useEffect(() => {
    if (productId) {
      // retrieve product data by  id
      setFormData(productsList[0]);
    }
  }, [productId]);

  const saveProduct = useCallback(
    ({ title, description, price, image }) => {
      // send request to update the product
      // redirect to product details on success
      alert("Update product", productId);
    },
    [productId]
  );

  return formData ? (
    <ProductForm
      onSubmit={saveProduct}
      buttonText="Save Changes"
      product={formData}
    />
  ) : (
    "There are no product detaills"
  );
});
