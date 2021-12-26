import axios from 'axios';

const base_url = 'https://fakestoreapi.com/products';

const getProducts = async () => {
  try {
    const { data: productsList } = await axios.get(base_url);
    return productsList
  } catch (error) {
    console.error(error);
    return false;
  }
};

const getProductById = async (productId) => {
  console.log('productId', productId);
  try {
    const { data: product } = await axios.get(`${base_url}/${productId}`);
    return product
  } catch (error) {
    console.error(error);
    return false;
  }
};

export { getProducts, getProductById };