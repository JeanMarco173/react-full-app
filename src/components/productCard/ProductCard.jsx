import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './cardstyle.module.css';

const ProductCard = (props) => {

  const { product } = props;

  const [ minuts, setMinuts ] = useState(props.timer.minuts || 60);
  const [ seconds, setSeconds ] = useState(props.timer.seconds || 1);
  const [ segInterval, setSegInterval ] = useState()

  useEffect(()=>{
    if(seconds!==0 && minuts!==0){
      setSegInterval(
        setInterval(() => {
          setSeconds(seconds => seconds-1);
        }, 1000)
      );
    }
    return () => clearInterval(segInterval);
  },[])

  useEffect(()=>{
      if(seconds===0){
        if(minuts===0) clearInterval(segInterval)
        else{ 
          setSeconds(60);
          setMinuts(minuts-1)
        }
      }
  },[seconds])

  function pad2(number) {
    return (number < 10 ? '0' : '') + number
  }

  return(
    <div className={styles.product__container}>
      <img src={product.image} alt={product.title} className={styles.product__image}/>
      <div className={styles.product__detail__container}>
        <label className={styles.product__name__text}>{product.title}</label>
        <label className={styles.product__detail__text}>Rating: {product.rating.rate}</label>
        <label className={styles.product__detail__text}>Timer: {pad2(minuts)}:{seconds}</label>
        {
          minuts > 0 && seconds > 0
            ? <Link to={`/product/${product.id}`}><button className={styles.product__detail__button}>Detalle</button></Link>
            : <button className={styles.product__detail__button} onClick={ () => { alert('Ha expirado el tiempo del producto')}}>Detalle</button>
        }
      </div>
    </div>
  )
}

export default ProductCard;