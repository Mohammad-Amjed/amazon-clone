import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import { auth, db } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./Payment";
import Orders from "./Orders";
import Address from "./Address";
import NewAddress from "./NewAddress";
import ProductPage5 from "./ProductPage5";
import ProductPage4 from "./ProductPage4";
import ProductPage3 from "./ProductPage3";
import ProductPage2 from "./ProductPage2";
import ProductPage1 from "./ProductPage1";
import ProductPage0 from "./ProductPage0";
import CartLogin from "./CartLogin";

function App() {
  const [{ user }, dispatch] = useStateValue();
  const [name, setName] = useState();
  const [image, setImage] = useState();
  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      // console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  function renderCafe(doc) {
    const name = doc.data().name;

    setName(<p>name</p>);
  }
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/product-0">
            <Header />
            <ProductPage0 />
          </Route>
          <Route path="/product-5">
            <Header />
            <ProductPage5 />
          </Route>
          <Route path="/product-4">
            <Header />
            <ProductPage4 />
          </Route>
          <Route path="/product-3">
            <Header />
            <ProductPage3 />
          </Route>
          <Route path="/product-2">
            <Header />
            <ProductPage2 />
          </Route>
          <Route path="/product-1">
            <Header />
            <ProductPage1 />
          </Route>
          <Route path="/new-address">
            <Header />
            <NewAddress />
          </Route>
          <Route path="/address">
            <Header />
            <Address />
          </Route>
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>
          <Route path="/cart-login">
            <Header />
            <CartLogin />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Payment />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
