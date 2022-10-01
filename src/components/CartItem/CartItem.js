import React from "react";
import { Row, Col } from "react-bootstrap";
import { cartContext } from "../../context/Context";

const CartItem = ({ id, quantity }) => {
  const {
    data,
    cart,
    setCart,
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
  } = React.useContext(cartContext);

  const prod = data.find((item) => item.id == id);

  return (
    <div className="m-5">
      <Row>
        <Col sm={3}>
          <img
            className="img"
            style={{ width: "150px", height: "100px" }}
            src={`${prod.thumbnail}`}
            alt="no-image"
          />
        </Col>
        <Col sm={2}>
          <span>{prod.title}</span>
        </Col>
        <Col sm={2}>
          <span>₹ {prod.price}</span>
        </Col>
        <Col sm={2} className="button-spacing">
          <button
            className="decrementItem"
            onClick={() => {
              decreaseCartQuantity(id);
            }}
          >
            -
          </button>

          <span>{quantity}</span>

          <button
            className="incrementItem"
            onClick={() => {
              increaseCartQuantity(id);
            }}
          >
            +
          </button>
        </Col>
        <Col sm={2}>
          <button
            className="remove btn btn-primary"
            onClick={() => {
              setCart(cart.filter((ele) => ele.id != id));
            }}
          >
            Remove
          </button>
        </Col>
      </Row>
    </div>
  );
};

export default CartItem;
