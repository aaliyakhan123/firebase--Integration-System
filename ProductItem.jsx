import { useDispatch } from "react-redux";
import { deleteProductFromDB } from "../redux/productSlice";

function ProductItem({ product }) {

  const dispatch = useDispatch();

  return (
    <div className="product-card">

      <h3 className="product-title">{product.name}</h3>

      <p><strong>Category:</strong> {product.category}</p>
      <p><strong>Price:</strong> ₹{product.price}</p>
      <p><strong>Stock:</strong> {product.stock}</p>

      <button
        className="delete-btn"
        onClick={() => dispatch(deleteProductFromDB(product.id))}
      >
        Delete
      </button>

    </div>
  );
}

export default ProductItem;