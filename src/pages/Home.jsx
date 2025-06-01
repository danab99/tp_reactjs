import ProductosContainer from "../components/ProductosContainer.jsx";
import '../styles/Home.css';


function Home() {
  return ( 
    <section className="home">
      <h2 className="home-title">¡Bienvenidx a nuestra tienda digital!</h2>
      <p className="home-description">Descubrí nuestros productos destacados</p>
      
      <section id="productos">
        <ProductosContainer />
      </section>
    </section>
  );
}


export default Home;
