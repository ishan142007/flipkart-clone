import React from 'react'
import './file.css'
import 'remixicon/fonts/remixicon.css'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import LoginPage from '../login/Login'

function Header({name}) {
    


  
  return (
    <header className="bg-white text-black shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-3">
        <div className="flex items-center gap-2">
          <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg" alt="Flipkart Logo" className="h-8 w-auto" />
        </div>
        <div className="flex-1 mx-4 hidden md:flex">
          <input
            type="text"
            placeholder="Search for products"
            className="w-full px-3 py-2 rounded text-black bg-blue-100 outline-none"
          />
        </div>
        <div className="flex items-center gap-2">
        <Link to={'/profile'}>  <button className="bg-white px-4 py-2 rounded flex items-center gap-2 border cursor-pointer border-gray-200 hover:bg-gray-100">
            <i className="ri-user-line"></i>
            <span className="hidden sm:inline">{name}</span>
          </button></Link>
        <Link to={'/cart'} >  <div className="px-2 sm:px-4 flex items-center gap-1 cursor-pointer hover:text-blue-600">
            <i className="ri-shopping-cart-line"></i>
            <span className="hidden sm:inline">Cart</span>
          </div></Link>
          <div className="px-2 sm:px-4 flex items-center gap-1 cursor-pointer hover:text-blue-600">
            <i className="ri-store-line"></i>
            <span className="hidden md:inline">Become a Seller</span>
          </div>
         <Link to={'/Admin'}>
          <div className="px-2 sm:px-4 flex items-center gap-1 cursor-pointer hover:text-blue-600">
            <i className="ri-more-2-line"></i>
          </div>
         </Link>
        </div>
        {/* Mobile search icon */}
        <div className="md:hidden ml-2">
          <i className="ri-search-line text-xl"></i>
        </div>
      </div>
      {/* Mobile search bar below header */}
      <div className="md:hidden px-3 pb-2">
        <input
          type="text"
          placeholder="Search for products"
          className="w-full px-3 py-2 rounded text-black bg-blue-100 outline-none"
        />
      </div>
    </header>
  )
}

export default Header
