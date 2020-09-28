import React from "react";
import { Form } from "react-final-form";
import { Input, Textarea, Button } from "../form-elements";
import styles from "./product-form.module.css";

export const ProductForm = React.memo(({ product, onSubmit, buttonText }) => {
  const { title, description, price, image } = product || {};

  return (
    <Form onSubmit={onSubmit}>
      {({ handleSubmit }) => (
        <form onSubmit={handleSubmit} className={styles.form}>
          <Input
            label="Title"
            name="title"
            placeholder="Title"
            type="text"
            initialValue={title}
          />
          <Textarea
            label="Description"
            name="description"
            placeholder="Description"
            initialValue={description}
          />
          <Input
            label="Price"
            name="price"
            placeholder="Price"
            type="number"
            initialValue={price}
          />
          <Input
            label="Image"
            name="image"
            placeholder="Image url"
            type="text"
            initialValue={image}
          />
          <Button text={buttonText} />
        </form>
      )}
    </Form>
  );
});
