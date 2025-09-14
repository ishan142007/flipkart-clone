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

const sampleProducts = [
  { name: "iPhone 14", price: "69999", image: "https://via.placeholder.com/150" },
  { name: "Samsung TV", price: "39999", image: "https://via.placeholder.com/150" },
  { name: "Nike Shoes", price: "4999", image: "https://via.placeholder.com/150" },
];

function App() {
  const [login,Setlogin]=useState(false);
  const name=localStorage.getItem('name');
  // const name='ishan';
  useEffect(()=>{
    const token=localStorage.getItem('token');
    if(token){
      Setlogin(true);
    }
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
      <Route path="/login"element={<LoginPage setlogin={Setlogin}/>}></Route>
      
    </Routes>
    </>
  );
}

export default App;
