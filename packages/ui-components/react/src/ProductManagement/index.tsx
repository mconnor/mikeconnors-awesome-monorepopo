import React, { useState } from 'react';

interface Product {
  id: number;
  name: string;
  price: number;
}

const initialProducts: Product[] = [
  { id: 1, name: 'Sample Product 1', price: 10 },
  { id: 2, name: 'Sample Product 2', price: 20 },
];

const ProductManagement: React.FC = () => {
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [name, setName] = useState('');
  const [price, setPrice] = useState<number>(0);

  const addProduct = () => {
    if (!name || price <= 0) return;
    const newProduct: Product = {
      id: products.length + 1,
      name,
      price,
    };
    setProducts([...products, newProduct]);
    setName('');
    setPrice(0);
  };

  const removeProduct = (id: number) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  return (
    <div>
      <h2>Product Management</h2>
      <div>
        <input
          type="text"
          placeholder="Product name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
        />
        <button onClick={addProduct}>Add Product</button>
      </div>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} (${product.price})
            <button onClick={() => removeProduct(product.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductManagement;
