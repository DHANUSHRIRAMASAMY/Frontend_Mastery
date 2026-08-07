import { useEffect, useState } from 'react';
import api from './api';

// Define the shape of a Product using a TypeScript interface
interface Product {
  id: number;
  name: string;
  price: number;
}

function App() {
  // products: the list fetched from the backend
  const [products, setProducts] = useState<Product[]>([]);

  // Form state for adding a new product
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  // useEffect runs once when the component first loads
  // It fetches all products from GET /products
  useEffect(() => {
    fetchProducts();
  }, []);

  async function fetchProducts() {
    const response = await api.get('/products');
    setProducts(response.data); // store the array in state
  }

  async function handleAddProduct(e: React.FormEvent) {
    e.preventDefault(); // prevent page reload on form submit

    // POST /products with name and price in the request body
    await api.post('/products', {
      name,
      price: parseFloat(price), // convert string input to a number
    });

    // Clear the form
    setName('');
    setPrice('');

    // Refresh the product list
    fetchProducts();
  }

  return (
    <div>
      <h1>Products</h1>

      {/* Form to add a new product */}
      <form onSubmit={handleAddProduct}>
        <input
          type="text"
          placeholder="Product name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        <button type="submit">Add Product</button>
      </form>

      {/* Product list */}
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} — ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
