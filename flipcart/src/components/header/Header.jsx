import React from 'react'
import './file.css'
import 'remixicon/fonts/remixicon.css'
import { Navigate, useNavigate } from 'react-router-dom'
import LoginPage from '../login/Login'

function Header({name}) {
  
  
  return (
    <>
     <header className="flex items-center bg-white p-3 text-black" >
      <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg" alt="" />
      {/* <div className="text-2xl font-bold mr-5">Flipkart</div> */}
      <input
        type="text"
        placeholder="Search for products"
        className="flex-1 px-3 py-2 rounded text-black bg-blue-100 outline-none"/>
      <button className="bg-white  px-4 py-2 ml-3 rounded" >
       <i className="ri-user-line"></i>{name}
      </button>

      <div className="px-4 ml-5"><i className="ri-shopping-cart-line"></i> Cart</div>
      <div className='ml-5 px-4'><i className="ri-store-line"></i>Become a Seller</div>
      <div className='ml-5 px-4'><i className="ri-more-2-line"></i></div>
    </header>
    </>
  )
}

export default Header
