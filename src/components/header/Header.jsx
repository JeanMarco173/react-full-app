import { Link } from 'react-router-dom';
import style from './headerstyle.module.css';

const Header = () => {
  return(
    <div className={style.header__container}>
      <Link to="/" className={style.link__text}>Home</Link>
      <Link to="/about" className={style.link__text}>About me</Link>
    </div>
  )
}

export default Header;