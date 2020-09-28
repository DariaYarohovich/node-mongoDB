import React from "react";
import { Form } from "react-final-form";
import { Input, Button } from "../components";

export const Auth = ({ buttonLabel, onAuth }) => {
  return (
    <Form onSubmit={onAuth}>
      {({ handleSubmit }) => (
        <form
          onSubmit={handleSubmit}
          style={{ width: "50%", margin: "0 auto" }}
        >
          <Input label="Email" name="email" placeholder="Email" type="text" />
          <Input
            label="Password"
            name="password"
            placeholder="Password"
            type="password"
          />
          <Button text={buttonLabel} />
        </form>
      )}
    </Form>
  );
};
