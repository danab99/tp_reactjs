import { useEffect, useState } from "react"
import "../styles/Producto.css"
import Card from "./Card"
import Carrito from "./Carrito"

function ProductosContainer() {
    const [productos, setProductos] = useState([])
    const [productosCarrito, setProductosCarrito] = useState([])
    const [carritoVisible, setCarritoVisible] = useState(false);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);
    const [total, setTotal] = useState(0)

    function toggleCarrito() {
        setCarritoVisible(!carritoVisible);
    }

    {//https://68100d8b27f2fdac24101ef5.mockapi.io/productos
        useEffect(() => {
            fetch('https://fakestoreapi.com/products')
                .then((respuesta) =>
                    respuesta.json()
                )
                .then((datos) => {
                    console.log(datos)
                    setProductos(datos)
                    setCargando(false);
                })
                .catch((error) => {
                    console.log("Error", error)
                    setError('Hubo un problema al cargar los productos.');
                    setCargando(false);
                });
        }, []);
    }

    function funcionCarrito(producto) {
        const existe = productosCarrito.find(p => p.id === producto.id);
        if (existe) {
            const carritoActualizado = productosCarrito.map((p) => {
                if (p.id === producto.id) {
                    const productoActualizado = { ...p, cantidad: p.cantidad + producto.cantidad }
                    return productoActualizado
                } else {
                    return p
                }
            })
            setProductosCarrito(carritoActualizado)
        } else {
            // Si no existe, lo agregamos con su cantidad
            const nuevoCarrito = [...productosCarrito, producto];
            setProductosCarrito(nuevoCarrito)
        }
        const nuevoTotal = [...productosCarrito, producto].reduce(
            (acc, p) => acc + p.price * p.cantidad, 0
        );
        setTotal(nuevoTotal);


    }

    function eliminarProducto(id) {
        setProductosCarrito(prev => prev.filter(producto => producto.id !== id));
    }


    if (cargando) {
        return <p>Cargando productos...</p>;
    } else if (error) {
        return <p>{error}</p>;
    } else {
        return (
            <>
                <button
                    style={{
                        position: "fixed",
                        top: 20,
                        right: 20,
                        zIndex: 1100,
                        backgroundColor: "#ebc9c5",
                        color: "white",
                        border: "none",
                        borderRadius: "50%",
                        width: "50px",
                        height: "50px",
                        fontSize: "1.5rem",
                        cursor: "pointer",
                    }}
                    onClick={toggleCarrito}
                >
                    🛒
                </button>

                <div className="productos-conteiner">
                    {productos.map((producto) => (
                        <Card
                            key={producto.id}
                            producto={producto}
                            funcionCarrito={funcionCarrito}
                        />
                    ))}
                </div>


                {carritoVisible && (
                    <Carrito productosCarrito={productosCarrito} onClose={() => setCarritoVisible(false)} eliminarProducto={eliminarProducto} />
                )}
            </>
        );
    }


}


export default ProductosContainer

