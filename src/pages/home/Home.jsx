import styles from './homestyle.module.css';
import ProductCard from '../../components/productCard/ProductCard.jsx';

const Home = () => {

  const generateRandomTime = () => {
    const minuts = Math.random() * (60 - 0) + 0;
    const seconds = minuts > 0 ? Math.random() * (60 - 0) + 0 : Math.random() * (60 - 30) + 30;
    return ({ minuts, seconds })
  }

  const array = [1,2,3,4,5]

  const product = { name: 'product', url: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg", timer: 10, rating: 5 }
  const timer = { minuts: 1, seconds: 40 }

  return(
    <div className={styles.container}>
      {
        array.map((item,index)=>(
          <ProductCard
            key={index}
            product={product}
            timer={timer}
          ></ProductCard>
        ))
      }
    </div>
  )
};

export default Home;
