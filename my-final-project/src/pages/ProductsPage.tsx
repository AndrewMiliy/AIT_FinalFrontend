import React, { useEffect, useState } from 'react';
import { apiClient } from '../features/api/apiClient';

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  images: string[]; // Добавляем поле images в интерфейс продукта
  // Добавьте другие поля по мере необходимости
}

const ProductsPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

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
            <img src={product.images[0]} alt={product.title} style={{ width: '100px', height: '100px' }} />
            <div>
              <h3>{product.title}</h3>
              <p>{product.description}</p>
              <p>${product.price}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsPage;
