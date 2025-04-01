import { useEffect, useState } from "react";
import "./ItemListContainer.css";
import { productos } from "../../products";
import Item from "../Item/Item";
import ItemDetail from "../ItemDetail/ItemDetail";

function ItemListContainer() {
  const [productosFiltrados, setProductosFiltrados] = useState(null);

  useEffect(() => {
    console.log("Lista de productos", productos);
  }, []);

  return (
    <div>
      <div className="container-productos">
        {productos.map((elem) => {
          return (
            <Item
              key={elem.id}
              productos={elem}
              filtrarProductos={setProductosFiltrados}
            />
          );
        })}
      </div>
      {productosFiltrados && (
        <ItemDetail
          productos={productosFiltrados}
          cerrarDetalle={() => setProductosFiltrados(null)}
        />
      )}
    </div>
  );
}

export default ItemListContainer;
