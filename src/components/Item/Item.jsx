import "./Item.css";

function Item({ productos, filtrarProductos }) {
  const { nombre, precio, inventario } = productos;
  return (
    <div>
      <h3>{nombre}</h3>
      <h5>{precio}</h5>
      <p>Ultimos {inventario} disponibles</p>
      <button onClick={() => console.log("Agregado", productos)}>
        Agregar al carrito
      </button>
      <button onClick={() => filtrarProductos(productos)}>
        Detalle del producto
      </button>
    </div>
  );
}

export default Item;
