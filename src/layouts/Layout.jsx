import Nav from "../components/Nav.jsx";
import HeaderHome from "../components/Header.jsx";
import HeaderContacto from "../components/HeaderContacto.jsx";
import HeaderAcerca from "../components/HeaderAcerca.jsx";
import Footer from "../components/Footer.jsx";


import { useLocation, Outlet } from "react-router-dom";

function Header() {
  const location = useLocation();
  console.log(location.pathname)

  if (location.pathname.startsWith("/acerca")) {
    return <HeaderAcerca />;
  }
  if (location.pathname.startsWith("/contacto")) {
    return <HeaderContacto />;
  }
  return <HeaderHome />;
}

function Layout() {
  return (
    <>
      <Nav />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Layout;


