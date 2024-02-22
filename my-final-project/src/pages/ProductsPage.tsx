import React, { useEffect, useState } from 'react';
import { apiClient } from '../features/api/apiClient';

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  // Добавьте другие поля по мере необходимости
}

const ProductsPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const inputRef = React.useRef<HTMLInputElement>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await apiClient.get('/products');
        setProducts(response.data.products);
      } catch (error) {
        console.error('Ошибка при получении продуктов:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <div>Загрузка...</div>;

  return (
    <div>
      <h2>Список продуктов</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.title} - ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsPage;
