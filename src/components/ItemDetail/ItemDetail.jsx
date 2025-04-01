import "./ItemDetail.css";
function ItemDetail({ productos, cerrarDetalle }) {
  const { nombre, precio, inventario, categoria, descripcion } = productos;
  return (
    <div>
      <h3>{nombre}</h3>
      <h5>{precio}</h5>
      <h5>{categoria.toUpperCase()}</h5>
      <p>Ultimos {inventario} disponibles</p>
      <p>{descripcion}</p>
      <button onClick={() => console.log("Agregado", productos)}>
        Agregar al carrito
      </button>
      <button onClick={cerrarDetalle}>Cerrar</button>
    </div>
  );
}

export default ItemDetail;
