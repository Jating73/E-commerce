import axios from 'axios'
import React from 'react'
import { Container } from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import Rating from '../Rating/Rating';
import "./Modal.css"



const Modal = ({modal}) => {
    console.log(modal)

    const [modalData,setModalData]=React.useState();
    const modalApi= async()=>{
        const {data}=await axios.get(`https://dummyjson.com/products/${modal}`)
        console.log(data)
        setModalData(data)
    }

    React.useEffect(()=>{
        if(modal){
            modalApi()
        }
        
    },[modal])
  return (
    <div className='productInfo'>
        <Container>
            <Row>
                <Col sm-7>
                {
            modal && modalData ? (
                <img src={`${modalData.thumbnail}`} alt="sdfgdfg" />
            ):"Loading......."
        }
                </Col>
                <Col sm-5>
                    
                        <div className=''>
                            {
                            modal && modalData ? (
                                <>
                                 <span><h1>{modalData.title}</h1>({modalData.brand})</span>
                                <h6>{modalData.description}</h6>
                                <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero similique perferendis consectetur at eius non praesentium officia ad, beatae, repellat eligendi aliquam quas eveniet modi dignissimos soluta quisquam? Reprehenderit, molestiae!</h6>
                                <Rating rating={modalData.rating}/>

                                <h5>₹ {modalData.price}</h5>

                                <h5>Quantity <span>+</span> <input type="text" /><span> -</span></h5>

                                <button>Add Too Cart</button>

                                </>

            ):""
                            }
                        </div>
                       
                    

                </Col>
            </Row>
        </Container>



















       
        
    </div>
  )
}

export default Modal;


        