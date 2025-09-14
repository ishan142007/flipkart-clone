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

const sampleProducts = [
  { name: "iPhone 14", price: "69999", image: "https://via.placeholder.com/150" },
  { name: "Samsung TV", price: "39999", image: "https://via.placeholder.com/150" },
  { name: "Nike Shoes", price: "4999", image: "https://via.placeholder.com/150" },
];

function App() {
  const [login,Setlogin]=useState(false);
  const name=localStorage.getItem("name");
  const email=localStorage.getItem('email');
  // const name='ishan';
  useEffect(()=>{
    const token=localStorage.getItem('token');
    console.log(token);
    if(token){
      Setlogin(true);
    }
    // localStorage.removeItem('token');
    // localStorage.removeItem('name');

  },[])
  
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
      <Route path="/Signup" element={<SignupPage/>}></Route>
      <Route path="/profile" element={<Profile name={name} email={email} />}></Route>
      <Route path="/cart" element={<Cart/>}></Route>
      
    </Routes>
    </>
  );
}

export default App;
