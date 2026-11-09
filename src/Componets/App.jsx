import React from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import mystore from "./redux/mystore.jsx";

export default function App() {
  return (
    <>
      <Provider store={mystore}>
        <Header />

        <Outlet />

        <Footer />
      </Provider>
    </>
  );
}
