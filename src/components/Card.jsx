import { useState } from "react";
import "../styles/ProductoCard.css"

function Card({ producto, funcionCarrito }) {
  const [cantidad, setCantidad] = useState(1);

  function agregarAlCarrito() {
    if (cantidad < 1) return;
    funcionCarrito({ ...producto, cantidad });
  }

  function sumarContador() {
    setCantidad(cantidad + 1);
  }

  function restarContador() {
    if (cantidad > 1) setCantidad(cantidad - 1);
  }

  return (
    <div className="producto-card">
      <img className="producto-image" src={producto.image} alt={producto.title} />
      <div className="producto-info">
        <h2>{producto.title}</h2>
        <p className="descripcion">{producto.description}</p>
        <p className="precio">{producto.price} $</p>

        <div className="contador">
          <button onClick={restarContador}>−</button>
          <span>{cantidad}</span>
          <button onClick={sumarContador}>+</button>
        </div>

        <button className="agregar-btn" onClick={agregarAlCarrito}>Agregar al carrito</button>
      </div>
    </div>

  );
}


export default Card