import React from 'react';
export const cartContext=React.createContext();

const Context = ({children}) => {

   const[data,setData]=React.useState();
   const[cart,setCart]=React.useState([]);
   const[search,setSearch]=React.useState("");
   const[categoryFilter,setCategoryFilter]=React.useState();
   const[modal,setModal]=React.useState();
   const[itemInfo,setItemInfo]=React.useState([]);
   const[incrementItem,setIncrementItem]=React.useState();
   const[decrementItem,setDecrementItem]=React.useState();
   
  return (
    <cartContext.Provider value={{cart,setCart,search,setSearch,data,setData,categoryFilter,setCategoryFilter,modal,setModal}}>{children}</cartContext.Provider>
  )
}

export default Context