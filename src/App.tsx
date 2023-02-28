import React from 'react';
import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import { Contacts } from "./module/contacts";
import { PageLayout } from "./core";
import { Order } from "./module/orders";
import { DetailedProductPage, ProductsPage } from "./module/products";





function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<PageLayout />}>
          <Route index element={<ProductsPage />} />
          <Route path="product-detailed" element={<DetailedProductPage />} />
          <Route path="order" element={<Order />} />
          <Route path="contacts" element={<Contacts />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
