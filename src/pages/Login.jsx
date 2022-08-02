import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from 'react-router-dom';

const  Login=()=> {
    const navigat=useNavigate()
    const [showsignin, setshowsignin] = useState(false)
    const [message, setmessage] = useState("")
    const Toggle = () => {
        setshowsignin(!showsignin)
    }
    const signupFn=()=>{
        
        const fstname=document.getElementById('fstname').value ;
        const lstname=document.getElementById('lstname').value ;
        const email=document.getElementById('email').value ;
        const password=document.getElementById('password').value ;
        const cnfpassword=document.getElementById('cnfpassword').value
       if(fstname && lstname && email && password && cnfpassword){
        localStorage.setItem('fstname',fstname)
        localStorage.setItem('lstname',lstname)
        localStorage.setItem('email',email)
        localStorage.setItem('password',password)
       }
       setmessage('User Signed Up Successfully...')
    

    }
    const loginFn=()=>{
        
       let email=document.getElementById('email1').value
       let password1=document.getElementById('password1').value;         
        let mail=localStorage.getItem("email")
        let password=localStorage.getItem("password")
        console.log(mail,email,password,password1)
     if(mail && password ){
        if(email ===mail && password === password1){
            setmessage('Login successfully')
            navigat('/Table')
        }else{
          
            setmessage("Please fill correct credential")
           
        }
     }else{
        
          setmessage("Please create an account")
     }
    }
    return(

        <div className="col-md-12 justify-content-center align-items-center  bg-primary vh-100">
        <h1 className=" col-md-12 d-flex justify-content-center align-items-center" style={{ color: "white" ,paddingTop:"10%"}}>COUNTRY APP</h1>
            <div className="card col-md-12 d-flex justify-content-center align-items-center  p-5 " style={{width:"30%",marginLeft:"35%" ,marginTop:"3%"}}>
            <div className="row ">
            <div className="col ">
            {
            showsignin ?(
                <div className=' bg-white'>
                <div>
                    <h1>Create Account</h1>
                    <div className='text-center text-info' onClick={Toggle} style={{cursor:"pointer"}}>Already a member? Login </div> 
                    
                    </div>
                <div className=''>
                    <form >
                        <input type='text' className='border rounded m-1 w-100 p-1 ' placeholder=' First name' autoFocus required id='fstname'/><br />
                        <input type='text' className='border rounded m-1 w-100 p-1' placeholder=' Last name' autoFocus required id='lstname'/><br />
                        <input type='email' className='border rounded m-1 w-100 p-1' placeholder=' Email' autoFocus required id='email' /><br />
                        <input type='password' id='password' className='border rounded m-1 p-1 w-100' placeholder=' Password' autoFocus required /><br />
                        <input type='password' className='border rounded m-1 w-100 p-1' placeholder=' Confirm password' id='cnfpassword' autoFocus required /><br />
                        <button  className='d-flex justify-content-center btn btn-primary w-100 my-1 p-1' onClick={signupFn}>Sign Up</button>
                    </form>
                   <b className='text-secondry'>{message}</b>
                </div>
            </div>


        
            ):(
                
                <div className='  bg-white'>
                    <div>
                        <h1>Please Login</h1>
                        <div className='text-center text-info' onClick={Toggle} style={{cursor:"pointer"}}>Not a member? Signup </div> 
                    </div>
                    <div className='w-100'>
                        <div >

                            <input type='email' className='border rounded m-1 p-1 w-100' placeholder=' Email'id='email1' autoFocus required /><br />
                            <input type='password' className='border rounded m-1 p-1 w-100' placeholder=' Password'id='password1' autoFocus required /><br />

                             <button className='d-flex justify-content-center  btn btn-primary w-100 m-1 p-1' onClick={loginFn}>Signin</button>
                            <b className='text-danger'>{message}</b>
                        </div>

                    </div>
                </div>

                
            )
            }
            </div>
            </div>
            </div>
            </div>
        
    )
}

export default Login;


