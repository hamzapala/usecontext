import React, {createContext, useState} from 'react'

export const productContext = createContext()
const initialProducts = [
    {id: 0, product: 'Basketball', price: 10},
    {id: 1, product: 'Baseball', price: 20},
    {id: 2, product: 'Football', price: 30},
];

export const ProductProvider = (props) => {
    const [products, setproducts] = useState(initialProducts)

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
    };
}