import React, { useState } from 'react';

const App = () => {
  const [statusFilter, setStatusFilter] = useState('All');

  // Food orders with prices between ₦1,500 and ₦3,000
   const orders = [
  { id: 1, customerName: "Amina Yusuf", foodOrdered: "Jollof Rice & Grilled Tilapia", price: 2500, status: "Delivered", orderTime: "2026-01-01 10:35" },
  { id: 2, customerName: "Emeka Okafor", foodOrdered: "Pepper Soup & Pounded Yam", price: 1850, status: "Pending", orderTime: "2026-01-01 14:22" },
  { id: 3, customerName: "Fatima Bello", foodOrdered: "Grilled Chicken & Chips", price: 2200, status: "Delivered", orderTime: "2026-01-02 11:15" },
  { id: 4, customerName: "Oluwaseun Adebayo", foodOrdered: "Seafood Okra Soup & Eba", price: 2800, status: "Delivered", orderTime: "2026-01-02 13:45" },
  { id: 5, customerName: "Yusuf Mohammed", foodOrdered: "Assorted Meat Pepper Soup", price: 1950, status: "Pending", orderTime: "2026-01-02 19:30" },
  { id: 6, customerName: "Ngozi Eze", foodOrdered: "Ofada Rice & Ayamase", price: 2600, status: "Delivered", orderTime: "2026-01-03 12:15" },
  { id: 7, customerName: "Tunde Lawal", foodOrdered: "Grilled Catfish & Yam Porridge", price: 2950, status: "Delivered", orderTime: "2026-01-03 15:30" },
  { id: 8, customerName: "Aisha Ibrahim", foodOrdered: "Beef Suya & Fried Plantain", price: 1800, status: "Pending", orderTime: "2026-01-04 09:45" },
  { id: 9, customerName: "Chinedu Nwankwo", foodOrdered: "Fisherman's Soup & Fufu", price: 2750, status: "Delivered", orderTime: "2026-01-04 14:20" },
  { id: 10, customerName: "Zainab Abdullahi", foodOrdered: "Chicken Shawarma & Fries", price: 2300, status: "Delivered", orderTime: "2026-01-05 11:10" },
  { id: 11, customerName: "Oluwaseyi Johnson", foodOrdered: "Goat Meat Pepper Soup", price: 2450, status: "Delivered", orderTime: "2026-01-05 16:45" },
  { id: 12, customerName: "Adebayo Ogunlesi", foodOrdered: "Fried Rice & Grilled Chicken", price: 2900, status: "Pending", orderTime: "2026-01-06 10:30" },
  { id: 13, customerName: "Chioma Okonkwo", foodOrdered: "Banga Soup & Starch", price: 2100, status: "Delivered", orderTime: "2026-01-06 13:15" },
  { id: 14, customerName: "Ibrahim Suleiman", foodOrdered: "Grilled Tilapia & Yam Chips", price: 2700, status: "Delivered", orderTime: "2026-01-06 18:30" },
  { id: 15, customerName: "Blessing Okafor", foodOrdered: "Efo Riro & Pounded Yam", price: 1950, status: "Pending", orderTime: "2026-01-06 20:15" },
  { id: 16, customerName: "Oluwatosin Adeleke", foodOrdered: "Jollof Rice & Grilled Chicken", price: 2800, status: "Delivered", orderTime: "2026-01-07 11:20" },
  { id: 17, customerName: "Mohammed Bello", foodOrdered: "Pepper Soup & Yam", price: 1750, status: "Pending", orderTime: "2026-01-07 14:45" },
  { id: 18, customerName: "Amina Lawal", foodOrdered: "Grilled Catfish & Plantain", price: 2950, status: "Delivered", orderTime: "2026-01-07 18:30" },
  { id: 19, customerName: "Chukwuemeka Okafor", foodOrdered: "Ofe Nsala & Fufu", price: 2250, status: "Delivered", orderTime: "2026-01-08 09:15" },
  { id: 20, customerName: "Aisha Yusuf", foodOrdered: "Beef Suya & Chips", price: 1950, status: "Pending", orderTime: "2026-01-08 13:40" },
  { id: 21, customerName: "Oluwaseun Adebayo", foodOrdered: "Seafood Okro Soup & Eba", price: 2850, status: "Delivered", orderTime: "2026-01-08 17:20" },
  { id: 22, customerName: "Ibrahim Mohammed", foodOrdered: "Grilled Tilapia & Yam Chips", price: 2600, status: "Delivered", orderTime: "2026-01-09 10:30" },
  { id: 23, customerName: "Chioma Eze", foodOrdered: "Fried Rice & Chicken", price: 2450, status: "Pending", orderTime: "2026-01-09 14:15" },
  { id: 24, customerName: "Emmanuel Okonkwo", foodOrdered: "Pepper Soup & Pounded Yam", price: 1850, status: "Delivered", orderTime: "2026-01-09 19:00" },
  { id: 25, customerName: "Aminat Ogunlesi", foodOrdered: "Jollof Rice & Grilled Tilapia", price: 2700, status: "Delivered", orderTime: "2026-01-10 11:45" },
  { id: 26, customerName: "Yusuf Bello", foodOrdered: "Banga Soup & Starch", price: 2150, status: "Pending", orderTime: "2026-01-10 15:20" },
  { id: 27, customerName: "Oluwaseun Adeleke", foodOrdered: "Grilled Chicken & Chips", price: 2300, status: "Delivered", orderTime: "2026-01-10 18:45" },
  { id: 28, customerName: "Aisha Mohammed", foodOrdered: "Pepper Soup & Yam", price: 1750, status: "Delivered", orderTime: "2026-01-11 10:15" },
  { id: 29, customerName: "Chinedu Okafor", foodOrdered: "Ofada Rice & Ayamase", price: 2650, status: "Pending", orderTime: "2026-01-11 14:30" },
  { id: 30, customerName: "Amina Yusuf", foodOrdered: "Grilled Catfish & Yam Porridge", price: 2900, status: "Delivered", orderTime: "2026-01-11 19:15" },
  { id: 31, customerName: "Oluwaseyi Johnson", foodOrdered: "Beef Suya & Plantain", price: 1950, status: "Delivered", orderTime: "2026-01-12 09:30" },
  { id: 32, customerName: "Adebayo Ogunlesi", foodOrdered: "Seafood Okra Soup & Eba", price: 2850, status: "Pending", orderTime: "2026-01-12 13:45" },
  { id: 33, customerName: "Chioma Okonkwo", foodOrdered: "Jollof Rice & Grilled Chicken", price: 2450, status: "Delivered", orderTime: "2026-01-12 17:30" },
  { id: 34, customerName: "Ibrahim Suleiman", foodOrdered: "Pepper Soup & Pounded Yam", price: 1800, status: "Delivered", orderTime: "2026-01-13 10:15" },
  { id: 35, customerName: "Blessing Okafor", foodOrdered: "Grilled Tilapia & Chips", price: 2750, status: "Pending", orderTime: "2026-01-13 14:45" }
];
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Food Order Management</h1>
        
        {/* User Statistics Segment */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-blue-100 text-blue-600 mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div>
                <p className="text-gray-500 text-sm font-medium">Total Registered Users</p>
                <p className="text-2xl font-bold text-gray-800">1,200</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-green-100 text-green-600 mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="text-gray-500 text-sm font-medium">Active Users (Last 30 Days)</p>
                <p className="text-2xl font-bold text-gray-800">400</p>
              </div>
            </div>
          </div>
        </div>

        {/* Orders List */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-800">Recent Orders</h2>
            <div className="mt-4 flex space-x-4">
              <button 
                onClick={() => setStatusFilter('All')}
                className={`px-4 py-2 rounded-md ${statusFilter === 'All' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700'}`}
              >
                All
              </button>
              <button 
                onClick={() => setStatusFilter('Pending')}
                className={`px-4 py-2 rounded-md ${statusFilter === 'Pending' ? 'bg-yellow-500 text-white' : 'bg-gray-100 text-gray-700'}`}
              >
                Pending
              </button>
              <button 
                onClick={() => setStatusFilter('Delivered')}
                className={`px-4 py-2 rounded-md ${statusFilter === 'Delivered' ? 'bg-green-500 text-white' : 'bg-gray-100 text-gray-700'}`}
              >
                Delivered
              </button>
              <button 
                onClick={() => setStatusFilter('Cancelled')}
                className={`px-4 py-2 rounded-md ${statusFilter === 'Cancelled' ? 'bg-red-500 text-white' : 'bg-gray-100 text-gray-700'}`}
              >
                Cancelled
              </button>
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order ID</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Food Ordered</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price (₦)</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order Time</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {orders
                  .filter(order => statusFilter === 'All' || order.status === statusFilter)
                  .map((order) => (
                    <tr key={order.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">#{order.id}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.customerName}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.foodOrdered}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.price.toLocaleString()}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          order.status === 'Delivered' ? 'bg-green-100 text-green-800' :
                          order.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          {order.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{new Date(order.orderTime).toLocaleString()}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;