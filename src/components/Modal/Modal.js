import axios from "axios";
import React from "react";
import { Container, Carousel } from "react-bootstrap";
import { cartContext } from "../../context/Context";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Rating from "../Rating/Rating";
import "./Modal.css";

const Modal = ({ modal }) => {
  console.log(modal);

  const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity } =
    React.useContext(cartContext);

  const quantity = getItemQuantity(modal);

  const [modalData, setModalData] = React.useState();
  const modalApi = async () => {
    const { data } = await axios.get(`https://dummyjson.com/products/${modal}`);
    // console.log(data);
    setModalData(data);
  };

  React.useEffect(() => {
    if (modal) {
      modalApi();
    }
  }, [modal]);
  return (
    <div className="productInfo">
      <Container>
        <Row>
          <Col sm-7>
            {modal && modalData ? (
              <Carousel>
                {modalData.images.map((image) => {
                  return (
                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src={image}
                        alt="First slide"
                      />
                    </Carousel.Item>
                  );
                })}
              </Carousel>
            ) : (
              "Loading......."
            )}
          </Col>
          <Col sm-5>
            <div className="">
              {modal && modalData ? (
                <>
                  <span>
                    <h1>{modalData.title}</h1>({modalData.brand})
                  </span>
                  <h6>{modalData.description}</h6>
                  {/* <h6>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Vero similique perferendis consectetur at eius non
                    praesentium officia ad, beatae, repellat eligendi aliquam
                    quas eveniet modi dignissimos soluta quisquam?
                    Reprehenderit, molestiae!
                  </h6> */}
                  <Rating rating={modalData.rating} />

                  <h5>₹ {modalData.price}</h5>

                  {quantity ? (
                    <div className="quantityCheck">
                      <button
                        className="add"
                        onClick={() => {
                          decreaseCartQuantity(modal);
                        }}
                      >
                        -
                      </button>
                      <div>
                        <span className="fs-3">{quantity}</span> in cart
                      </div>
                      <button
                        className="add"
                        onClick={() => {
                          increaseCartQuantity(modal);
                        }}
                      >
                        +
                      </button>
                    </div>
                  ) : (
                    <button
                      className="add"
                      onClick={() => {
                        increaseCartQuantity(modal);
                      }}
                    >
                      Add to Cart
                    </button>
                  )}
                </>
              ) : (
                ""
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Modal;
