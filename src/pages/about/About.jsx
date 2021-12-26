import styles from './aboutstyle.module.css';

const About = () => {

  const description = "Comencé mi aventura como desarrollador con Js hace 3 años. Lo que me motiva a seguir aprendiendo y dedicarme al desarrollo es la infinita posibilidad de crear y brindar soluciones a diferentes problemas o necesidades."
  
  return(
    <div className={styles.about__container}>
      <div className={styles.avatar__image__container}>
        <a href="https://www.linkedin.com/in/jean-marco-silva-bocángel-614b90173/ "target="_blank">
          <img src='./me.jpeg' alt="Jean Marco Silva" className={styles.avatar__image}/>
        </a>
      </div>
      <div className={styles.about__me__container}>
        <label className={styles.name__text}>Jean Marco Silva Bocangel</label>
        <label className={styles.decription__text}>{description}</label>
        <label className={styles.email__text}>jeanmarko.13.7@gmail.com</label>
        <a href="https://github.com/JeanMarco173/MiR" target="_blank" className={styles.github__text}>Github Repo</a>
      </div>
    </div>
  )
};

export default About;

/*
Nombre
Descripción
Imagen
Lista de 3 cosas que hayas aprendido en este programa
Correo
Link a tu Github
*/
