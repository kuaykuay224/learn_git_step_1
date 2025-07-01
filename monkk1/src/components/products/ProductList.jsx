
import { useProducts } from "../../hooks/setProduct";
import ProductCard from "./ProductCard"; // Make sure file name case matches

const ProductList = ({ onViewDetail }) => {
  const { products, loading, error } = useProducts();

  if (loading) return <div className="loading">กำลังโหลด...</div>;
  if (error) return <div className="error">เกิดข้อผิดพลาดในการโหลดข้อมูล</div>;

  return (
    <div className="product-list">
      <h2>สินค้าหมด</h2>
      <div className="product-grid">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} onViewDetail={onViewDetail} />
        ))}
      </div>
    </div>
  )
}

export default ProductList;