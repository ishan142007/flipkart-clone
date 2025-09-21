// src/App.jsx
import React, { useEffect, useState } from "react";
// import Navbar from "./components/Navbar";
import Category from "./components/category/Category";
import ProductRow from "./components/Productrow/Productrow";
import Header from "./components/header/Header";
import BannerCarousel from "./components/BannerCrousel/Banner";
import { Navigate, Route,Routes } from "react-router-dom";
import LoginPage from "./components/login/Login";
import HomePage from "./components/HomePage";
import SignupPage from "./components/signup/Signup";
import Profile from "./othercoms/Profile/Profile";
import Cart from "./othercoms/Cart/Cart";
import Admin from "../Admin/Admin";
import axios from "axios";



const sampleProducts = [
  { name: "iPhone 14", price: "69999", image: "https://via.placeholder.com/150" },
  { name: "Samsung TV", price: "39999", image: "https://via.placeholder.com/150" },
  { name: "Nike Shoes", price: "4999", image: "https://via.placeholder.com/150" },
];

function App() {
  const [user,setuser]=useState([])
  const [email,setemail]=useState('')
  const [name,setname]=useState('')

  const [login,Setlogin]=useState(false);
  // const name=localStorage.getItem("name");
  // const email=localStorage.getItem('email');
  // const name='ishan';
  useEffect(()=>{
    const ans=async()=>{
      try{

        const res= await axios.get("http://localhost:8000/api/fetchdata");
        // console.log(res.data.data);
        
        
        if(res.data.data.length >0){
          const userdata=res.data.data[0];
          // console.log(userdata);
          setuser(userdata);
          setname(userdata.name);
          setemail(userdata.email)
          Setlogin(true);
        }
      }
      catch(error){
          console.error("Error fetching user:", error);
      }
    }
    ans()
    // localStorage.removeItem('token');
    // localStorage.removeItem('name');
  },[])
//  console.log(name)
  
      
//   useEffect(() => {
//   if (users.length > 0) {
//     setName(users[0].name);
//     setEmail(users[0].email);
//   }
// }, [users]);  // runs whenever users array updates

  return (
    
    <>
     

      {/* <Category />
      <BannerCarousel />
      <ProductRow title="Best of Electronics" products={sampleProducts} />
      <ProductRow title="Fashion Deals" products={sampleProducts} />
      <ProductRow title="Best of Season"/> */}

  

    <Routes>
      <Route path="/" element={login?<HomePage name={name} Products={sampleProducts}/>:<Navigate to={'/login'}/>}></Route>
      <Route path="/login"element={login?<Navigate to={'/'}/>:<LoginPage setlogin={Setlogin}/>}></Route>
      <Route path="/Signup" element={<SignupPage setlogin={Setlogin}/>}></Route>
      <Route path="/profile" element={<Profile name={name} email={email} setlogin={Setlogin}/>}></Route>
      <Route path="/cart" element={<Cart/>}></Route>
      <Route path="/Admin" element={<Admin />}></Route>
      
    </Routes>
    </>
  );
}

export default App;
