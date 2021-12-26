import styles from './productstyle.module.css';

const ProductDetail = () => {

  const detail = ""

  return(
    <div className={styles.product__container}>
      <div className={styles.product__image__container}>
        <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="Trulli" className={styles.product__image}/>
      </div>
      <div className={styles.product__detail__container}>
        <label className={styles.product__name__text}>titulo</label>
        <label className={styles.product__detail__label}>Descripción:</label>
        <p className={styles.product__detail__text}>"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday"</p>
        <label className={styles.product__detail__text}>Rating: 3.5</label>
        <label className={styles.product__price__text}>$ 300.00</label>
      </div>
    </div>
  )
};

export default ProductDetail;
