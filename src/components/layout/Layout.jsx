import Header from '../header/Header.jsx'

const Layout = (props) => {

  const { children } = props;
  
  return(
    <div>
      <Header/>
      <div>
        {children}
      </div>
    </div>
  )
}

export default Layout;