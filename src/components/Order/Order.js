import React from "react";
import { collection, addDoc, getFirestore } from "firebase/firestore";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const customSwal = withReactContent(Swal);

function Order({ order, getTotal, clearCart, setConfirmarCompra }) {
  const db = getFirestore();
  const collectionReference = collection(db, "orders");

  const date = new Date().toLocaleString + "-";

  const orderObject = {
    comprador: {
      nombre: "Carlos Lopez",
      email: "carlos@gmail.com",
      tel: 456778965,
      direccion: "Calle falsa 123",
    },
    items: order.map((element) => ({
      id: element.item.id,
      cantidad: element.quantity,
      precio: element.item.precio,
      nombre: element.item.nombre,
    })),
    date,
    total: getTotal(),
  };

  const handleCheckout = () => {
    addDoc(collectionReference, orderObject).then((response) => {
      setConfirmarCompra(false);
      clearCart();
      customSwal.fire({
        icon: "success",
        title: "Tu orden fue confirmada",
        // prettier-ignore
        html: (
          <div>
            <span>
              Va a llegar a tu domicilio <strong>{orderObject.comprador.direccion}</strong> en
              24 horas.{" "}
            </span>
            <hr>
            </hr>
            <span> El ID de tu orden es: <strong>{response.id}</strong> </span>{" "}
          </div>
        ),
      });
    });
  };

  return (
    <div className="cartview-container">
      <h2>Confirma tu compra!</h2>
      {order.map((element) => (
        <div className="order-item-container">
          <p>{element.item.nombre}</p>
          <span>${element.item.precio}</span>
          <br></br>
          <span>Cantidad: {element.quantity}</span>
        </div>
      ))}
      <h4>Total de la compra: ${getTotal()}</h4>
      <button onClick={handleCheckout}>Confirmar compra</button>
    </div>
  );
}

export default Order;
