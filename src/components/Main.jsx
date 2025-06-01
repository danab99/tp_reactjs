import ProductosContainer from "./ProductosContainer"
import '../styles/Main.css';
function Main() {
    return (
        <main style={{ padding: "20px" }}>
            <section id="productos">
                <h2>Nuestros Productos</h2>
                <ProductosContainer />
            </section>

            {/* Otras secciones futuras */}
            {/* 
            <section>
                <h3>Categorías populares</h3>
            </section>
            <section>
                <h3>Testimonios</h3>
            </section> 
            */}
        </main>
    )
}

export default Main; 