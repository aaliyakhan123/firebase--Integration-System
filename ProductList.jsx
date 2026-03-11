import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/productSlice";
import ProductItem from "./ProductItem";

function ProductList() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.items);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div>
      <h2>Product List</h2>
      {products.map((p) => (
        <ProductItem key={p.id} product={p} />
      ))}
    </div>
  );
}

export default ProductList;