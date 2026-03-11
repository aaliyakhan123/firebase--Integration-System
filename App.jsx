import React from "react";
import AddProduct from "./components/AddProduct";
import ProductList from "./components/ProductList";


function App() {
  return (
    <div className="container">
      <h1>Inventory Tracking System</h1>

      <AddProduct/>
      <ProductList/>
    </div>
  );
}

export default App;