import CarritoCard from "./CarritoCard.jsx";
import "../styles/Carrito.css";

export default function Carrito({ productosCarrito, onClose, eliminarProducto }) {
  const total = productosCarrito.reduce(
    (subTotal, producto) => subTotal + producto.price * producto.cantidad,
    0
  );

  return (
    <>
      <div className="carrito-overlay open" onClick={onClose}></div>
      <div className="carrito-drawer open">
        <div className="carrito-header">
          <h2 className="carrito-titulo">Tu carrito</h2>
          <button className="carrito-close-btn" onClick={onClose}>&times;</button>
        </div>
        <div className="carrito-items">
          {productosCarrito.length > 0 ? (
            productosCarrito.map((producto) => (
              <CarritoCard
                key={producto.id}
                producto={producto}
                eliminarProducto={eliminarProducto}
              />
            ))
          ) : (
            <p className="carrito-vacio">Carrito vacío</p>
          )}
        </div>
        {total > 0 && (
          <div className="carrito-footer">
            <p>Total a pagar:</p>
            <span>{total.toFixed(2)} $</span>
          </div>
        )}
      </div>
    </>
  );
}


