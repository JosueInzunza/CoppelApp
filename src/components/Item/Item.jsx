import "./Item.css";

function Item({ productos }) {
  const { nombre, precio, inventario } = productos;
  return (
    <div>
      <h3>{nombre}</h3>
      <h5>{precio}</h5>
      <p>Ultimos {inventario} disponibles</p>
      <button>Agregar al carrito</button>
    </div>
  );
}

export default Item;
