import React from 'react'

function Profile({name,email}) {
  return (
    <section className="max-w-5xl mx-auto mt-12 p-8 bg-white rounded-3xl shadow-2xl">
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        <div className="flex-shrink-0 mb-6 lg:mb-0">
          <img
            src={`https://ui-avatars.com/api/?name=${name || 'User'}&background=0D8ABC&color=fff&size=180`}
            alt="Profile"
            className="rounded-full w-44 h-44 border-4 border-blue-200 shadow-lg mx-auto"
          />
        </div>
        <div className="flex-1 w-full">
          <div className="mb-6">
            <h2 className="text-3xl font-bold text-gray-800 mb-2 break-words">{name || 'User Name'}</h2>
            <p className="text-gray-600 text-base break-words">{email || 'user@email.com'}</p>
          </div>
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-700 mb-1">About</h3>
            <p className="text-gray-500 text-base">Welcome to your Flipkart profile! Here you can view your account details, order history, and update your information.</p>
          </div>
        </div>
      </div>
      <div className="mt-12">
        <h3 className="text-xl font-semibold text-gray-700 mb-4">Your Orders</h3>
        <div className="bg-gray-50 rounded-xl p-6 min-h-[100px] text-gray-500 text-base">
          {/* Orders will be listed here. You can map over an orders array to show order cards. */}
          No orders yet.
        </div>
      </div>
    </section>
  )
}

export default Profile
