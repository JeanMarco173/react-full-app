import { useEffect, useState } from 'react';
import { getProductById } from '../../api/apis.js';
import { useParams } from 'react-router-dom';
import styles from './productstyle.module.css';

const ProductDetail = () => {

  const { productId } = useParams();

  const [ product, setProduct ] = useState({image: '', title: '', description: '', rating: { rate: 0}, price: 0});

  useEffect( () => {
    const fetchProduct = async () => {
      const auxProduct = await getProductById(productId)
      setProduct(auxProduct);
    };
    fetchProduct();
  },[])

  return(
    <div className={styles.product__container}>
      <div className={styles.product__image__container}>
        <img src={product.image} alt={product.title} className={styles.product__image}/>
      </div>
      <div className={styles.product__detail__container}>
        <label className={styles.product__name__text}>{product.title}</label>
        <label className={styles.product__detail__label}>Descripción:</label>
        <p className={styles.product__detail__text}>{product.description}</p>
        <label className={styles.product__detail__text}>Rating: {product.rating.rate}</label>
        <label className={styles.product__price__text}>$ {product.price}</label>
      </div>
    </div>
  )
};

export default ProductDetail;
