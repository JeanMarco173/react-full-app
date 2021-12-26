import { useEffect, useState } from 'react';
import ProductCard from '../../components/productCard/ProductCard.jsx';
import { getProducts } from '../../api/apis.js';
import styles from './homestyle.module.css';

const Home = () => {

  const [ products, setProducts ] = useState([]);

  const generateRandomTime = () => {
    const minuts = Math.round(Math.random() * (60 - 0) + 0);
    const seconds = minuts > 0 ? Math.round(Math.random() * (60 - 0) + 0) : Math.round(Math.random() * (60 - 30) + 30);
    return ({ minuts, seconds })
  }

  useEffect( () => {
    const fetchProducts = async () => {
      const products = await getProducts()
      console.log('products', products);
      setProducts(products.map(item => ({ product: item, timer: generateRandomTime() })))
    };
    fetchProducts();
  },[])

  return(
    <div className={styles.container}>
      {
        products.length > 0 && products.map( item =>(
          <ProductCard
            key={item.product.id}
            product={item.product}
            timer={item.timer}
          ></ProductCard>
        ))
      }
    </div>
  )
};

export default Home;
