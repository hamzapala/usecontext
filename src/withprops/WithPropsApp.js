import { useState } from 'react'
import ProductList from './ProductList';

const initialProducts = [
  { id: 0, product: "Basketball", price: 10 },
  { id: 1, product: "Baseball", price: 12 },
  { id: 2, product: "Tennis Ball", price: 14 },
];

const WithPropsApp = () => {
    const [product, setProduct] = useState(initialProducts)
    const increasePrice = (event) => {
      const newProducts = [...product];
      newProducts[event.target.id].price++;
      setProduct(newProducts);
    };
    const decreasePrice = (e) => {
        console.log("decreasePrice");
        const newProducts = [...product];
        newProducts[e.target.id].price--;
        setProduct(newProducts);
    }
  return (
    <div>
      <h3>WithPropsApp</h3>
      <ProductList
        products={product}
        increasePrice={increasePrice}
        decreasePrice={decreasePrice}
      />
    </div>
  );
}

export default WithPropsApp