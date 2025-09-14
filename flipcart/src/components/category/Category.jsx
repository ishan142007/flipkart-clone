import React from 'react'
const categories=[
    

  { name: "Mobiles", icon: "https://rukminim1.flixcart.com/fk-p-flap/64/64/image/5f2ee7f883cdb774.png?q=100" },
  { name: "Fashion", icon: "https://rukminim1.flixcart.com/fk-p-flap/128/128/image/ff559cb9d803d424.png?q=100" },
  { name: "Electronics", icon: "https://rukminim1.flixcart.com/fk-p-flap/128/128/image/af646c36d74c4be9.png?q=100" },
  { name: "Grocery", icon: "https://rukminim1.flixcart.com/fk-p-flap/128/128/image/e730a834ad950bae.png?q=100" },
  { name: "Appliances", icon: "https://rukminim1.flixcart.com/fk-p-flap/128/128/image/e90944802d996756.jpg?q=100" },

];
function Category() {
    return (
        <>
       <div className="flex bg-white shadow p-4 justify-around ">
      {categories.map((cat, i) => (
          <div key={i} className="flex flex-col items-center">
          <span className="text-2xl"><img src={cat.icon} alt="" className='w-20 h-20' /></span>
          <span>{cat.name}</span>
        </div>
      ))}
  
    </div>
      </>
  )
}

export default Category
