import { useState,useEffect } from 'react';
import getProducts from '../api/api'
import MaterialTable from "@material-table/core";
function Table() {
 
  const [products, setProducts] = useState([]);
  // const [curruncies, setcurruncies] = useState([])
  
 const LogoutFn=()=>{
  localStorage.clear()
  console.log("hi")
  window.location.href ="/"
 }


const getProducts = async () => {
    
  await fetch("https://restcountries.com/v2/all")

  .then((response) => response.json())
  
      .then((data) => setProducts(data));
      console.log(products)
     
    };
    useEffect(()=>{
      
          getProducts();
         

    },[])
    
   
 
  
    // let curr= data.map((element, i)=>{
    //   return element.currencies[0].code
    // })
    // console.log(curr);
    // setcurruncies(products);
   
  
  return (
    <div className='mt-4'>
<div className='d-flex justify-content-end '><button className='btn btn-primary' onClick={LogoutFn}>Logout</button></div>

       <MaterialTable
            data={products}
          
          
            columns={[
              { title: "COUNTRY",
               field: "name" },

               { title:"CAPITAL",
               field: "capital" },
               { title:"CONTINENT",
               field: "region" },
               { title: "FLAG",
               field: "flags",
               render: products => <img src={products.flags.svg} alt="" border="3" height="100" width="100" />,
                 },
                 
               {
                title: "CURRENCIES",
                field: "currencies[0].name"
              },
              {
                title: "CURRENCIES(SYMBOL)",
                field: "currencies[0].symbol"
              },
            ]}
            options={{
              
              headerStyle: {
                backgroundColor: "#3D5AFE",
                color: "#fff",
              },
              rowStyle: {
                backgroundColor: "#9C27B0",
                color: "#fff"
              },
            }}
            title="DASHBOARD"
          />
          
       
    </div>
  );
}

export default Table;
// #9C27B0
// #B388FF