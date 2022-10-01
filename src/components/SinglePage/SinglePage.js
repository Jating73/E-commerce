import React, { createContext } from "react";
import { cartContext } from "../../context/Context";
import "./SinglePage.css";
import Rating from "../Rating/Rating";
import ItemInfoPage from "../ItemInfoPage/ItemInfoPage";
import Filter from "../Filter/Filter";
import Modal from "../Modal/Modal";
import { Link } from "react-router-dom";

const SinglePage = ({ items, data }) => {
  // console.log(items);

  const {
    cart,
    setCart,
    search,
    setSearch,
    modal,
    setModal,
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
  } = React.useContext(cartContext);

  const quantity = getItemQuantity(items.id);

  const handleImg = (id) => {
    setModal(id);
  };
  // })

  const addToCart = (item) => {
    setCart([...cart, { ...item, qty: 1 }]);
    // console.log(items);
  };

  // console.log(cart)

  return (
    <div className="products" key={items.id}>
      <>
        <Link to="/product-info">
          <img
            className="img"
            src={`${items.thumbnail}`}
            alt="no-image"
            onClick={() => {
              handleImg(items.id);
            }}
          />
        </Link>

        <div className="productDesc">
          <span>
            {items.title.length > 15
              ? items.description.substr(0, 15) + "..."
              : items.title}
          </span>
          <span>₹ {items.price}</span>
        </div>
        <span className="rating-user">
          Rating <Rating rating={items.rating} />
        </span>
        <br />
        {quantity ? (
          <div className="quantityCheck">
            <button
              className="add"
              onClick={() => {
                decreaseCartQuantity(items.id);
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
                increaseCartQuantity(items.id);
              }}
            >
              +
            </button>
          </div>
        ) : (
          <button
            className="add"
            onClick={() => {
              increaseCartQuantity(items.id);
            }}
          >
            Add to Cart
          </button>
        )}
      </>
    </div>
  );
};

export default SinglePage;

{
  /* <img className='img' src={`${items.image}`} alt="no-image" />
<div className='productDesc'>
<span>{items.title.length>15?items.title.substr(0,15)+"...":items.title}</span>
<span>₹ {items.price}</span>
</div>
<span className='rating-user'>Rating <Rating rating={items.rating.rate}/></span>
<span className='rating-count'>{items.rating.count} Users rated</span>
{
cart.includes(items) ? (
    <button className='remove' onClick={()=>{
        setCart(cart.filter((ele)=>ele.id!=items.id))
    }}>Remove from Cart</button>
)
:
(
    <button className='add' onClick={()=>{
        setCart([...cart,items])
    }}>Add to Cart</button>

)
} */
}

// return (
//     <div className='products' key={items.id} >

//         {
//             search.length > 0 ? (data.filter((ele)=>{
//                 return ele.title.toLowerCase().includes(search.toLowerCase());
//             }).map((ele)=>{
//                 return(
//                     <>
//                      <img className='img' src={`${items.image}`} alt="no-image" />
//             <div className='productDesc'>
//             <span>{items.title.length>15?items.title.substr(0,15)+"...":items.title}</span>
//             <span>₹ {items.price}</span>
//             </div>
//             <span className='rating-user'>Rating <Rating rating={items.rating.rate}/></span>
//             <span className='rating-count'>{items.rating.count} Users rated</span>
//             {
//                 cart.includes(items) ? (
//                     <button className='remove' onClick={()=>{
//                         setCart(cart.filter((ele)=>ele.id!=items.id))
//                     }}>Remove from Cart</button>
//                 )
//                 :
//                 (
//                     <button className='add' onClick={()=>{
//                         setCart([...cart,items])
//                     }}>Add to Cart</button>

//                 )
//             }
//                     </>
//                 )
//             })):
//             (
//                 <>
//                 <img className='img' src={`${items.image}`} alt="no-image" />
//             <div className='productDesc'>
//             <span>{items.title.length>15?items.title.substr(0,15)+"...":items.title}</span>
//             <span>₹ {items.price}</span>
//             </div>
//             <span className='rating-user'>Rating <Rating rating={items.rating.rate}/></span>
//             <span className='rating-count'>{items.rating.count} Users rated</span>
//             {
//                 cart.includes(items) ? (
//                     <button className='remove' onClick={()=>{
//                         setCart(cart.filter((ele)=>ele.id!=items.id))
//                     }}>Remove from Cart</button>
//                 )
//                 :
//                 (
//                     <button className='add' onClick={()=>{
//                         setCart([...cart,items])
//                     }}>Add to Cart</button>

//                 )
//             }
//             </>

//             )

//         }

//     </div>
//   )
