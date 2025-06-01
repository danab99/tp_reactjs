import "../styles/Carrito.css"

function CarritoCard({ producto, eliminarProducto }) {
    return (
        <div className="carrito-card">
            <h3 className="carrito-titulo">{producto.title}</h3>
            <p className="descripcion-carrito">{producto.description}</p>
            <img className="carrito-image" src={producto.image} alt={producto.title} />
            <span>Cantidad: {producto.cantidad}</span>
            <div>
                <p>Precio unitario:</p>
                <span>{producto.price} $</span>
            </div>
            <div>
                <p>Precio total:</p>
                <span>{producto.cantidad * producto.price} $</span>
            </div>

            <button className="boton-carrito" onClick={() => eliminarProducto(producto.id)}>
                X
            </button>
        </div>
    )
}

export default CarritoCard