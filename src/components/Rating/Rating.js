import React from 'react'
import {AiFillStar} from "react-icons/ai"
import {AiOutlineStar} from "react-icons/ai"

const Rating = ({rating}) => {
  return (
    <>
    
       {[...Array(5)].map((prod,index)=>(
        
        <span>
            {rating > index ? (<AiFillStar fontSize="15px"/>):(<AiOutlineStar fontSize="15px"/>)}
        </span>

       ))
       }
    
    </>
  )
}

export default Rating