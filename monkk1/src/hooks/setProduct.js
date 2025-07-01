import { useEffect, useState } from 'react';
import { api } from '../services/api';

export const useProducts = () => { 
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const data = await api.getProducts(); 
       
        setProducts(data.products ); 
         {console.log(data.products)}
      } catch (error) {
        setError(error.message || 'เกิดข้อผิดพลาดในการโหลดสินค้า');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return { products, loading, error };
};
