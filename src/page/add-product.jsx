import React, { useCallback } from "react";
import { ProductForm } from '../components';

export const AddProduct = React.memo(() => {
  const saveProduct = useCallback(({ title, description, price, image }) => {
    // send request to create a product
    // redirect to product details on success
    alert("Created a product");
  }, []);
  return <ProductForm onSubmit={saveProduct} buttonText="Save new product" />
});
