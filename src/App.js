import React, { Component } from "react";
import "./App.css";
import { Auth, Product, Products, AddProduct, EditProduct } from "./page";
import { Header } from "./components";
import { Switch, Redirect, Route } from "react-router-dom";

class App extends Component {
  state = {
    isAuth: true,
    error: undefined,
    authMode: "login",
  };

  onAuth = ({ email, password }) => {
    // extract form values
    if (this.state.authMode === "login") {
      // send login request
    } else {
      // send signup request
    }
  };

  onLogout = () => {
    this.setState({
      ...this.state,
      isAuth: false,
    });
  };

  render() {
    let routes = (
      <Switch>
        <Redirect from={"/"} to={"/products"} exact />
        <Redirect from={"/auth"} to={"/products"} exact />
        <Redirect from={"/signup"} to={"/products"} exact />
        <Route path="/product/:mode" component={AddProduct} />
        <Route path="/products/:id/:mode" component={EditProduct} />
        <Route path="/products/:id" render={() => <Product />} />
        <Route path="/products" render={() => <Products />} />
      </Switch>
    );

    if (!this.state.isAuth) {
      routes = (
        <Switch>
          <Redirect from={"/"} to={"/auth"} exact />
          <Redirect from={"/product"} to={"/auth"} />
          <Redirect from={"/products"} to={"/auth"} />
          <Route
            path={"/auth"}
            render={() => (
              <Auth onAuth={this.onAuth} mode={this.state.authMode} />
            )}
          />
        </Switch>
      );
    }

    return (
      <div className="App">
        <Header isAuth={this.state.isAuth} onLogout={this.onLogout} />
        <main>{routes}</main>
      </div>
    );
  }
}

export default App;
