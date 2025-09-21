import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";

export default function Admin() {

  
  const [activePage, setActivePage] = useState("Dashboard");

  const [user,setuser]=useState([]);

  useEffect(()=>{

    const dt=async(e)=>{
      try{
        
        const ans=await axios.get("http://localhost:8000/api/fetchdata");
        setuser(ans.data.data);
        // console.log(user)
        
      }
      catch(error){
        
      }
    }
    dt();
  },[])
  // Dashboard cards for Flipkart-like look
  const dashboardCards = [
    {
      title: "Total Orders",
      value: "1,245",
      icon: "📦",
      color: "bg-blue-100 text-blue-700",
    },
    {
      title: "Total Users",
      value: "3,210",
      icon: "👥",
      color: "bg-green-100 text-green-700",
    },
    {
      title: "Revenue",
      value: "₹12,50,000",
      icon: "💰",
      color: "bg-yellow-100 text-yellow-700",
    },
    {
      title: "Pending Shipments",
      value: "87",
      icon: "🚚",
      color: "bg-pink-100 text-pink-700",
    },
  ];

  // Dummy content
  const renderContent = () => {
    switch (activePage) {
      case "Dashboard":
        return (
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {dashboardCards.map((card) => (
                <div key={card.title} className={`rounded-xl shadow p-6 flex flex-col items-center ${card.color}`}>
                  <div className="text-3xl mb-2">{card.icon}</div>
                  <div className="text-lg font-bold mb-1">{card.title}</div>
                  <div className="text-2xl font-extrabold">{card.value}</div>
                </div>
              ))}
            </div>
            <h2 className="text-xl font-bold mb-4">Recent Activity</h2>
            <ul className="space-y-2">
              <li className="bg-gray-50 rounded p-3 text-gray-700">Order #1234 shipped to Mumbai</li>
              <li className="bg-gray-50 rounded p-3 text-gray-700">User John Doe registered</li>
              <li className="bg-gray-50 rounded p-3 text-gray-700">Payment received for Order #1233</li>
            </ul>
          </div>
        );
      case "Users":
        return (
          <div>
            <h2 className="text-xl font-bold mb-4">Manage Users</h2>
            <table className="w-full bg-white rounded-xl shadow overflow-hidden">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-3 text-left">Name</th>
                  <th className="p-3 text-left">Email</th>
                  <th className="p-3 text-left">Role</th>
                  <th className="p-3 text-left">Status</th>
                </tr>
              </thead>
              <tbody>
                {
                 

                  (user.length>0)?user.map((user)=>(

                    
                    <tr key={user.id}>
                  <td className="p-3">{user.name}</td>
                  <td className="p-3">{user.email}</td>
                  <td className="p-3">{user.id}</td>
                  <td className="p-3 text-green-600">Active</td>
                </tr>
                )
                  ):<tr>
                        <td colSpan="4" className="text-red-500 text-center">
                        No users found
                        </td>
                  </tr>
                }
               
              </tbody>
            </table>
          </div>
        );
      case "Settings":
        return (
          <div>
            <h2 className="text-xl font-bold mb-4">Settings</h2>
            <div className="space-y-4">
              <div>
                <label className="block font-semibold mb-1">Site Name</label>
                <input type="text" className="w-full p-2 border rounded" defaultValue="Flipkart Admin" />
              </div>
              <div>
                <label className="block font-semibold mb-1">Support Email</label>
                <input type="email" className="w-full p-2 border rounded" defaultValue="support@flipkart.com" />
              </div>
              <button className="bg-blue-600 text-white px-6 py-2 rounded font-bold mt-2">Save Changes</button>
            </div>
          </div>
        );
      default:
        return <h2 className="text-xl font-bold">Welcome!</h2>;
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-72 bg-gray-900 text-white flex flex-col shadow-xl">
        <div className="flex items-center gap-2 p-6 border-b border-gray-800">
          <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg" alt="Flipkart Admin" className="h-8 w-auto" />
          <span className="text-xl font-bold">Admin Portal</span>
        </div>
        <nav className="flex-1 p-6 space-y-2">
          {['Dashboard', 'Users', 'Settings'].map((page) => (
            <button
              key={page}
              onClick={() => setActivePage(page)}
              className={`w-full text-left p-3 rounded-lg font-semibold hover:bg-gray-800 transition ${activePage === page ? 'bg-gray-800' : ''}`}
            >
              {page}
            </button>
          ))}
        </nav>
        <div className="p-6 border-t border-gray-800">
          <button className="w-full p-3 bg-red-600 rounded-lg hover:bg-red-700 font-bold">Logout</button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">{activePage}</h1>
          <div className="flex items-center gap-4">
            <span className="font-medium text-gray-700">Admin</span>
            <img
              src="https://ui-avatars.com/api/?name=Admin&background=0D8ABC&color=fff&size=40"
              alt="profile"
              className="w-10 h-10 rounded-full border"
            />
          </div>
        </header>
        <main>{renderContent()}</main>
      </main>
    </div>
  );
}
