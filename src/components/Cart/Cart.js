import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { cartContext } from "../../context/Context";
import { Link } from "react-router-dom";
import "./Cart.css";
import CartItem from "../CartItem/CartItem";

const Cart = () => {
  let [total, setTotal] = React.useState();

  const [inputBox, setInputBox] = React.useState(0);

  const [count, setCount] = React.useState([]);

  const {
    data,
    cart,
    setCart,
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
  } = React.useContext(cartContext);

  // console.log(cart);

  let countTotal = () => {
    setTotal(cart.reduce((acc, cur) => acc + cur.price, 0));
  };

  // console.log(cart);

  React.useEffect(() => {
    countTotal();
    setCount(count);
  }, [cart, count]);
  return (
    <div className="cart-div">
      {cart.length === 0 ? (
        <div className="m-5">
          <h5>
            <Link to="/">back to Homepage</Link>
          </h5>
          <h1>Cart is Empty!</h1>
        </div>
      ) : (
        <Container>
          <Row>
            <Col sm={10}>
              <h5>
                <Link to="/">back to Homepage</Link>
              </h5>
              <h5 className="m-5">Products</h5>

              <div>
                {cart.map((prod) => (
                  <CartItem key={prod.id} {...prod} />
                ))}
              </div>
            </Col>
          </Row>
          <h5>
            {" "}
            <Link to="/">Add More Products</Link>
          </h5>

          <h2 style={{ float: "right" }}>
            Total ₹{" "}
            {cart.reduce((total, cartItem) => {
              const item = data.find((item) => item.id === cartItem.id);
              return total + (item?.price || 0) * cartItem.quantity;
            }, 0)}
          </h2>
        </Container>
      )}
    </div>
  );
};

export default Cart;
