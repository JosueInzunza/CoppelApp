import { useEffect } from "react";
import "./ItemListContainer.css";
import { productos } from "../../products";
import Item from "../Item/Item";

function ItemListContainer() {
  useEffect(() => {
    console.log("Lista de productos", productos);
  }, []);

  return (
    <div className="container-productos">
      {productos.map((elem) => {
        return <Item key={elem.id} productos={elem} />;
      })}
    </div>
  );
}

export default ItemListContainer;
