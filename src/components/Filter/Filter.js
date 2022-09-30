import React from 'react'
import { Form } from 'react-bootstrap'
import "./Filter.css";
import Dropdown from 'react-bootstrap/Dropdown';
import { cartContext } from '../../context/Context';
import Rating from '../Rating/Rating';
import Button from 'react-bootstrap/Button';
import SinglePage from '../SinglePage/SinglePage';
import Home from '../Home/Home';
import { Link } from 'react-router-dom';

const Filter = ({data}) => {
  const{setData,categoryFilter,setCategoryFilter}=React.useContext(cartContext);

  const[filterState,setFilterState]=React.useState(false);

  const arrangeCategory=[];

  data && data.map((ele)=>{
    arrangeCategory.push(ele.category)
  })

  const newCategory=[]

  for(let i=0;i<arrangeCategory.length;i++){
    let counter=1;
    for(let j=i+1;j<arrangeCategory.length;j++){
      if(arrangeCategory[i]===arrangeCategory[j] && arrangeCategory[i]!="0" ){
        arrangeCategory[j]="0";
        counter++;
      }
    }

    if(counter>1){
      newCategory.push(arrangeCategory[i]);
    }

  }

  const handleFilter=(e)=>{
    setCategoryFilter(e.target.value);
    setFilterState(true)

  }

  const check=[]

  // console.log(categoryFilter)
  return (
    <div className='filter'>
        <span className='title'>Filter Products</span>

    <Form.Select aria-label="Default select example" onChange={handleFilter}>

      {
         newCategory.map((catgry,index)=>{
          return(
            <option value={catgry}>
            {catgry}
          </option>

          )
            
        })
          
      }
    </Form.Select>
           <span>

            <Form.Label >Price</Form.Label>
             <Form.Range />
        </span>

        <span>
          Rating <br/>  
          <Rating/>
        </span>

        <span>
        <Link to="/"><Button variant="primary">Clear Filter</Button></Link>
        </span>

      

    </div>
  )
}

export default Filter




