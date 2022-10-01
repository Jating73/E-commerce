import React from "react";
export const cartContext = React.createContext();

const Context = ({ children }) => {
  const [data, setData] = React.useState();
  const [cart, setCart] = React.useState([]);
  const [search, setSearch] = React.useState("");
  const [categoryFilter, setCategoryFilter] = React.useState();
  const [modal, setModal] = React.useState();
  // const [itemInfo, setItemInfo] = React.useState([]);
  // const [incrementItem, setIncrementItem] = React.useState();
  // const [decrementItem, setDecrementItem] = React.useState();

  function getItemQuantity(id) {
    return cart.find((item) => item.id === id)?.quantity || 0;
  }

  function increaseCartQuantity(id) {
    setCart((currItems) => {
      if (currItems.find((item) => item.id === id) == null) {
        return [...currItems, { id, quantity: 1 }];
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  function decreaseCartQuantity(id) {
    setCart((currItems) => {
      if (currItems.find((item) => item.id === id)?.quantity == 1) {
        return currItems.filter((item) => item.id !== id);
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  return (
    <cartContext.Provider
      value={{
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        cart,
        setCart,
        search,
        setSearch,
        data,
        setData,
        categoryFilter,
        setCategoryFilter,
        modal,
        setModal,
      }}
    >
      {children}
    </cartContext.Provider>
  );
};

export default Context;
