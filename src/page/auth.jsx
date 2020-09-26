import React from "react";

export const Auth = ({onAuth, mode}) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = React.useCallback(() => {
    onAuth({ email, password });
  }, [onAuth, email, password]);

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        name="email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <input
        type="password"
        name="password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <button type="submit">{mode === 'login' ? 'Login' : 'Sign Up'}</button>
    </form>
  );
};
