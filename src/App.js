import React, { useState } from 'react';

const App = () => {
  const [statusFilter, setStatusFilter] = useState('All');

  // 100 new random food orders with prices between ₦1,000 and ₦2,500
  const orders = [
    { id: 1, customerName: "Adebayo Ogunlesi", foodOrdered: "Jollof Rice & Chicken", price: 2100, status: "Delivered", orderTime: "2025-11-01 08:15" },
    { id: 2, customerName: "Amina Mohammed", foodOrdered: "Fried Rice & Plantain", price: 1800, status: "Delivered", orderTime: "2025-11-01 09:30" },
    { id: 3, customerName: "Chinedu Okonkwo", foodOrdered: "Egusi Soup & Eba", price: 1950, status: "Delivered", orderTime: "2025-11-01 11:45" },
    { id: 4, customerName: "Folake Adebayo", foodOrdered: "Beans & Dodo", price: 1200, status: "Delivered", orderTime: "2025-11-01 13:20" },
    { id: 5, customerName: "Ibrahim Musa", foodOrdered: "Amala & Ewedu", price: 1850, status: "Cancelled", orderTime: "2025-11-01 15:10" },
    { id: 6, customerName: "Ngozi Eze", foodOrdered: "Yam & Egg Sauce", price: 1650, status: "Delivered", orderTime: "2025-11-01 17:00" },
    { id: 7, customerName: "Yusuf Bello", foodOrdered: "Indomie & Egg", price: 1350, status: "Delivered", orderTime: "2025-11-02 08:00" },
    { id: 8, customerName: "Aisha Abubakar", foodOrdered: "Moi Moi & Pap", price: 1450, status: "Delivered", orderTime: "2025-11-02 10:20" },
    { id: 9, customerName: "Emeka Nwosu", foodOrdered: "Fried Yam & Sauce", price: 1550, status: "Pending", orderTime: "2025-11-02 12:30" },
    { id: 10, customerName: "Bisi Adeleke", foodOrdered: "Eba & Okra Soup", price: 1750, status: "Delivered", orderTime: "2025-11-02 14:45" },
    { id: 11, customerName: "Oluwaseun Ojo", foodOrdered: "Rice & Stew", price: 1250, status: "Delivered", orderTime: "2025-11-03 09:15" },
    { id: 12, customerName: "Fatima Yusuf", foodOrdered: "Spaghetti & Sauce", price: 1650, status: "Cancelled", orderTime: "2025-11-03 11:30" },
    { id: 13, customerName: "Chika Obi", foodOrdered: "Pounded Yam & Egusi", price: 2250, status: "Delivered", orderTime: "2025-11-03 13:45" },
    { id: 14, customerName: "Musa Ibrahim", foodOrdered: "Jollof Rice & Fish", price: 1950, status: "Delivered", orderTime: "2025-11-03 15:20" },
    { id: 15, customerName: "Amina Lawal", foodOrdered: "Beans & Plantain", price: 1450, status: "Pending", orderTime: "2025-11-03 17:30" },
    { id: 16, customerName: "Oluwatosin Adebayo", foodOrdered: "Semo & Efo Riro", price: 1850, status: "Delivered", orderTime: "2025-11-04 08:30" },
    { id: 17, customerName: "Chinedu Nwachukwu", foodOrdered: "Fried Rice & Chicken", price: 2150, status: "Delivered", orderTime: "2025-11-04 10:45" },
    { id: 18, customerName: "Aisha Bello", foodOrdered: "Yam Porridge", price: 1750, status: "Delivered", orderTime: "2025-11-04 12:30" },
    { id: 19, customerName: "Ibrahim Suleiman", foodOrdered: "Beans & Bread", price: 1050, status: "Cancelled", orderTime: "2025-11-04 14:15" },
    { id: 20, customerName: "Folake Adeyemi", foodOrdered: "Amala & Gbegiri", price: 1950, status: "Delivered", orderTime: "2025-11-04 16:00" },
    { id: 21, customerName: "Yusuf Mohammed", foodOrdered: "Jollof Spaghetti", price: 1850, status: "Pending", orderTime: "2025-11-05 09:00" },
    { id: 22, customerName: "Amina Ibrahim", foodOrdered: "Fried Rice & Plantain", price: 1950, status: "Delivered", orderTime: "2025-11-05 11:15" },
    { id: 23, customerName: "Chinedu Okoro", foodOrdered: "Pounded Yam & Ogbono", price: 2050, status: "Delivered", orderTime: "2025-11-05 13:30" },
    { id: 24, customerName: "Ngozi Eze", foodOrdered: "Beans & Dodo", price: 1250, status: "Delivered", orderTime: "2025-11-05 15:45" },
    { id: 25, customerName: "Musa Abubakar", foodOrdered: "Jollof Rice & Beef", price: 1950, status: "Cancelled", orderTime: "2025-11-06 08:20" },
    { id: 26, customerName: "Aisha Yusuf", foodOrdered: "Amala & Ewedu", price: 1750, status: "Delivered", orderTime: "2025-11-06 10:35" },
    { id: 27, customerName: "Oluwaseun Adebayo", foodOrdered: "Fried Yam & Egg", price: 1550, status: "Pending", orderTime: "2025-11-06 12:50" },
    { id: 28, customerName: "Chika Nwosu", foodOrdered: "Eba & Okra Soup", price: 1650, status: "Delivered", orderTime: "2025-11-06 14:25" },
    { id: 29, customerName: "Ibrahim Musa", foodOrdered: "Rice & Stew", price: 1350, status: "Delivered", orderTime: "2025-11-07 09:10" },
    { id: 30, customerName: "Fatima Bello", foodOrdered: "Spaghetti & Sauce", price: 1450, status: "Cancelled", orderTime: "2025-11-07 11:25" },
    { id: 31, customerName: "Adebayo Ojo", foodOrdered: "Pounded Yam & Egusi", price: 2150, status: "Delivered", orderTime: "2025-11-07 13:40" },
    { id: 32, customerName: "Amina Suleiman", foodOrdered: "Jollof Rice & Fish", price: 1950, status: "Delivered", orderTime: "2025-11-07 15:15" },
    { id: 33, customerName: "Chinedu Nwachukwu", foodOrdered: "Beans & Plantain", price: 1350, status: "Pending", orderTime: "2025-11-08 08:30" },
    { id: 34, customerName: "Oluwatosin Adebayo", foodOrdered: "Semo & Efo Riro", price: 1850, status: "Delivered", orderTime: "2025-11-08 10:45" },
    { id: 35, customerName: "Aisha Bello", foodOrdered: "Fried Rice & Chicken", price: 2250, status: "Delivered", orderTime: "2025-11-08 12:30" },
    { id: 36, customerName: "Ibrahim Suleiman", foodOrdered: "Yam Porridge", price: 1750, status: "Cancelled", orderTime: "2025-11-08 14:15" },
    { id: 37, customerName: "Folake Adeyemi", foodOrdered: "Beans & Bread", price: 1150, status: "Delivered", orderTime: "2025-11-09 09:00" },
    { id: 38, customerName: "Yusuf Mohammed", foodOrdered: "Amala & Gbegiri", price: 1950, status: "Pending", orderTime: "2025-11-09 11:15" },
    { id: 39, customerName: "Amina Ibrahim", foodOrdered: "Jollof Spaghetti", price: 1850, status: "Delivered", orderTime: "2025-11-09 13:30" },
    { id: 40, customerName: "Chinedu Okoro", foodOrdered: "Fried Rice & Plantain", price: 1950, status: "Delivered", orderTime: "2025-11-09 15:45" },
    { id: 41, customerName: "Ngozi Eze", foodOrdered: "Pounded Yam & Ogbono", price: 2150, status: "Cancelled", orderTime: "2025-11-10 08:20" },
    { id: 42, customerName: "Musa Abubakar", foodOrdered: "Beans & Dodo", price: 1350, status: "Delivered", orderTime: "2025-11-10 10:35" },
    { id: 43, customerName: "Aisha Yusuf", foodOrdered: "Jollof Rice & Beef", price: 1950, status: "Pending", orderTime: "2025-11-10 12:50" },
    { id: 44, customerName: "Oluwaseun Adebayo", foodOrdered: "Amala & Ewedu", price: 1750, status: "Delivered", orderTime: "2025-11-10 14:25" },
    { id: 45, customerName: "Chika Nwosu", foodOrdered: "Fried Yam & Egg", price: 1550, status: "Delivered", orderTime: "2025-11-11 09:10" },
    { id: 46, customerName: "Ibrahim Musa", foodOrdered: "Eba & Okra Soup", price: 1650, status: "Cancelled", orderTime: "2025-11-11 11:25" },
    { id: 47, customerName: "Fatima Bello", foodOrdered: "Rice & Stew", price: 1350, status: "Delivered", orderTime: "2025-11-11 13:40" },
    { id: 48, customerName: "Adebayo Ojo", foodOrdered: "Spaghetti & Sauce", price: 1450, status: "Delivered", orderTime: "2025-11-11 15:15" },
    { id: 49, customerName: "Amina Suleiman", foodOrdered: "Pounded Yam & Egusi", price: 2250, status: "Pending", orderTime: "2025-11-12 08:30" },
    { id: 50, customerName: "Chinedu Nwachukwu", foodOrdered: "Jollof Rice & Fish", price: 1950, status: "Delivered", orderTime: "2025-11-12 10:45" },
    { id: 51, customerName: "Oluwatosin Adebayo", foodOrdered: "Beans & Plantain", price: 1350, status: "Delivered", orderTime: "2025-11-12 12:30" },
    { id: 52, customerName: "Aisha Bello", foodOrdered: "Semo & Efo Riro", price: 1850, status: "Cancelled", orderTime: "2025-11-12 14:15" },
    { id: 53, customerName: "Ibrahim Suleiman", foodOrdered: "Fried Rice & Chicken", price: 2250, status: "Delivered", orderTime: "2025-11-13 09:00" },
    { id: 54, customerName: "Folake Adeyemi", foodOrdered: "Yam Porridge", price: 1750, status: "Pending", orderTime: "2025-11-13 11:15" },
    { id: 55, customerName: "Yusuf Mohammed", foodOrdered: "Beans & Bread", price: 1150, status: "Delivered", orderTime: "2025-11-13 13:30" },
    { id: 56, customerName: "Amina Ibrahim", foodOrdered: "Amala & Gbegiri", price: 1950, status: "Delivered", orderTime: "2025-11-13 15:45" },
    { id: 57, customerName: "Chinedu Okoro", foodOrdered: "Jollof Spaghetti", price: 1850, status: "Cancelled", orderTime: "2025-11-14 08:20" },
    { id: 58, customerName: "Ngozi Eze", foodOrdered: "Fried Rice & Plantain", price: 1950, status: "Delivered", orderTime: "2025-11-14 10:35" },
    { id: 59, customerName: "Musa Abubakar", foodOrdered: "Pounded Yam & Ogbono", price: 2150, status: "Pending", orderTime: "2025-11-14 12:50" },
    { id: 60, customerName: "Aisha Yusuf", foodOrdered: "Beans & Dodo", price: 1350, status: "Delivered", orderTime: "2025-11-14 14:25" },
    { id: 61, customerName: "Oluwaseun Adebayo", foodOrdered: "Jollof Rice & Beef", price: 1950, status: "Delivered", orderTime: "2025-11-15 09:10" },
    { id: 62, customerName: "Chika Nwosu", foodOrdered: "Amala & Ewedu", price: 1750, status: "Cancelled", orderTime: "2025-11-15 11:25" },
    { id: 63, customerName: "Ibrahim Musa", foodOrdered: "Fried Yam & Egg", price: 1550, status: "Delivered", orderTime: "2025-11-15 13:40" },
    { id: 64, customerName: "Fatima Bello", foodOrdered: "Eba & Okra Soup", price: 1650, status: "Delivered", orderTime: "2025-11-15 15:15" },
    { id: 65, customerName: "Adebayo Ojo", foodOrdered: "Rice & Stew", price: 1250, status: "Pending", orderTime: "2025-11-16 08:30" },
    { id: 66, customerName: "Amina Suleiman", foodOrdered: "Spaghetti & Sauce", price: 1550, status: "Delivered", orderTime: "2025-11-16 10:45" },
    { id: 67, customerName: "Chinedu Nwachukwu", foodOrdered: "Pounded Yam & Egusi", price: 2150, status: "Delivered", orderTime: "2025-11-16 12:30" },
    { id: 68, customerName: "Aisha Bello", foodOrdered: "Jollof Rice & Fish", price: 1950, status: "Cancelled", orderTime: "2025-11-16 14:15" },
    { id: 69, customerName: "Ibrahim Suleiman", foodOrdered: "Beans & Plantain", price: 1350, status: "Delivered", orderTime: "2025-11-17 09:00" },
    { id: 70, customerName: "Folake Adeyemi", foodOrdered: "Semo & Efo Riro", price: 1850, status: "Pending", orderTime: "2025-11-17 11:15" },
    { id: 71, customerName: "Yusuf Mohammed", foodOrdered: "Fried Rice & Chicken", price: 2250, status: "Delivered", orderTime: "2025-11-17 13:30" },
    { id: 72, customerName: "Amina Ibrahim", foodOrdered: "Yam Porridge", price: 1750, status: "Delivered", orderTime: "2025-11-17 15:45" },
    { id: 73, customerName: "Chinedu Okoro", foodOrdered: "Beans & Bread", price: 1150, status: "Cancelled", orderTime: "2025-11-18 08:20" },
    { id: 74, customerName: "Ngozi Eze", foodOrdered: "Amala & Gbegiri", price: 1950, status: "Delivered", orderTime: "2025-11-18 10:35" },
    { id: 75, customerName: "Musa Abubakar", foodOrdered: "Jollof Spaghetti", price: 1850, status: "Pending", orderTime: "2025-11-18 12:50" },
    { id: 76, customerName: "Aisha Yusuf", foodOrdered: "Fried Rice & Plantain", price: 1950, status: "Delivered", orderTime: "2025-11-18 14:25" },
    { id: 77, customerName: "Oluwaseun Adebayo", foodOrdered: "Pounded Yam & Ogbono", price: 2150, status: "Delivered", orderTime: "2025-11-18 15:45" },
    { id: 78, customerName: "Chika Nwosu", foodOrdered: "Beans & Dodo", price: 1350, status: "Cancelled", orderTime: "2025-11-18 17:00" },
    { id: 79, customerName: "Ibrahim Musa", foodOrdered: "Jollof Rice & Beef", price: 1950, status: "Delivered", orderTime: "2025-11-18 18:10" },
    { id: 80, customerName: "Fatima Bello", foodOrdered: "Amala & Ewedu", price: 1750, status: "Delivered", orderTime: "2025-11-18 19:20" },
    { id: 81, customerName: "Adebayo Ojo", foodOrdered: "Fried Yam & Egg", price: 1550, status: "Pending", orderTime: "2025-11-18 20:30" },
    { id: 82, customerName: "Amina Suleiman", foodOrdered: "Eba & Okra Soup", price: 1650, status: "Delivered", orderTime: "2025-11-18 21:40" },
    { id: 83, customerName: "Chinedu Nwachukwu", foodOrdered: "Rice & Stew", price: 1250, status: "Delivered", orderTime: "2025-11-18 22:50" },
    { id: 84, customerName: "Oluwatosin Adebayo", foodOrdered: "Spaghetti & Sauce", price: 1450, status: "Cancelled", orderTime: "2025-11-18 23:55" },
    { id: 85, customerName: "Aisha Bello", foodOrdered: "Pounded Yam & Egusi", price: 2250, status: "Delivered", orderTime: "2025-11-18 00:05" },
    { id: 86, customerName: "Ibrahim Suleiman", foodOrdered: "Jollof Rice & Fish", price: 1950, status: "Pending", orderTime: "2025-11-18 01:15" },
    { id: 87, customerName: "Folake Adeyemi", foodOrdered: "Beans & Plantain", price: 1350, status: "Delivered", orderTime: "2025-11-18 02:25" },
    { id: 88, customerName: "Yusuf Mohammed", foodOrdered: "Semo & Efo Riro", price: 1850, status: "Delivered", orderTime: "2025-11-18 03:35" },
    { id: 89, customerName: "Amina Ibrahim", foodOrdered: "Fried Rice & Chicken", price: 2250, status: "Cancelled", orderTime: "2025-11-18 04:45" },
    { id: 90, customerName: "Chinedu Okoro", foodOrdered: "Yam Porridge", price: 1750, status: "Delivered", orderTime: "2025-11-18 05:55" },
    { id: 91, customerName: "Ngozi Eze", foodOrdered: "Beans & Bread", price: 1150, status: "Pending", orderTime: "2025-11-18 07:05" },
    { id: 92, customerName: "Musa Abubakar", foodOrdered: "Amala & Gbegiri", price: 1950, status: "Delivered", orderTime: "2025-11-18 08:15" },
    { id: 93, customerName: "Aisha Yusuf", foodOrdered: "Jollof Spaghetti", price: 1850, status: "Delivered", orderTime: "2025-11-18 09:25" },
    { id: 94, customerName: "Oluwaseun Adebayo", foodOrdered: "Fried Rice & Plantain", price: 1950, status: "Cancelled", orderTime: "2025-11-18 10:35" },
    { id: 95, customerName: "Chika Nwosu", foodOrdered: "Pounded Yam & Ogbono", price: 2150, status: "Delivered", orderTime: "2025-11-18 11:45" },
    { id: 96, customerName: "Ibrahim Musa", foodOrdered: "Beans & Dodo", price: 1350, status: "Delivered", orderTime: "2025-11-18 12:55" },
    { id: 97, customerName: "Fatima Bello", foodOrdered: "Jollof Rice & Beef", price: 1950, status: "Pending", orderTime: "2025-11-18 14:05" },
    { id: 98, customerName: "Adebayo Ojo", foodOrdered: "Amala & Ewedu", price: 1750, status: "Delivered", orderTime: "2025-11-18 15:15" },
    { id: 99, customerName: "Amina Suleiman", foodOrdered: "Fried Yam & Egg", price: 1550, status: "Delivered", orderTime: "2025-11-18 16:25" },
    { id: 100, customerName: "Chinedu Nwachukwu", foodOrdered: "Eba & Okra Soup", price: 1650, status: "Cancelled", orderTime: "2025-11-18 17:35" },
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