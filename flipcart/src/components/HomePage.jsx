import React from 'react'
import ProductRow from './Productrow/Productrow'
import BannerCarousel from './BannerCrousel/Banner' 
import Category from './category/Category'
import Header from './header/Header'      
function HomePage({Products,name}) {
  return (
    <div>
        <Header name={name}/>
        <Category />
      <BannerCarousel />
      <ProductRow title="Best of Electronics" products={Products} />
      <ProductRow title="Fashion Deals" products={Products} />
      <ProductRow title="Best of Season"/>
    </div>
  )
}

export default HomePage
