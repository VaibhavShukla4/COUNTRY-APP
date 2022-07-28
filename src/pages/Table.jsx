import { useState,useEffect } from 'react';

import MaterialTable from "@material-table/core";
function Table() {
 
  const [products, setProducts] = useState([]);
  // const [curruncies, setcurruncies] = useState([])
  
 const LogoutFn=()=>{
  localStorage.clear()
  console.log("hi")
  window.location.href ="/"
 }
    useEffect(()=>{
      
      const getProducts = async () => {
    
          await fetch("https://restcountries.com/v2/all")
      
          .then((response) => response.json())
          
              .then((data) => setProducts(data));
              console.log(products)
             
            };
           
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
               {
                title: "CURRENCIES",
                field: "currencies[0].name"
              },
            ]}
            options={{
              
              headerStyle: {
                backgroundColor: "#0F3443",
                color: "#fff",
              },
              rowStyle: {
                backgroundColor: "#eee",
              },
            }}
            title="DASHBOARD"
          />
          
       
    </div>
  );
}

export default Table;