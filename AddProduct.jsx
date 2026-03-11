import { useState } from "react";
import { useDispatch } from "react-redux";
import { addProductToDB } from "../redux/productSlice";

function AddProduct() {

  const dispatch = useDispatch();

  const [product, setProduct] = useState({
    name: "",
    category: "",
    price: "",
    stock: ""
  });

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(addProductToDB(product));

    setProduct({
      name: "",
      category: "",
      price: "",
      stock: ""
    });
  };

  return (
    <form onSubmit={handleSubmit}>

      <input
        name="name"
        placeholder="Product Name"
        value={product.name}
        onChange={handleChange}
      />

      <input
        name="category"
        placeholder="Category"
        value={product.category}
        onChange={handleChange}
      />

      <input
        name="price"
        placeholder="Price"
        value={product.price}
        onChange={handleChange}
      />

      <input
        name="stock"
        placeholder="Stock"
        value={product.stock}
        onChange={handleChange}
      />

      <button type="submit">Add Product</button>

    </form>
  );
}

export default AddProduct;