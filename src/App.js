import React, { useState } from 'react';

const App = () => {
  const [statusFilter, setStatusFilter] = useState('All');

  // 100 new random food orders with prices between ₦1,000 and ₦2,500
   const orders = [
  { id: 1, customerName: "Adebayo Ogunleye", foodOrdered: "Jollof Rice & Chicken", price: 1620, status: "Delivered", orderTime: "2025-12-01 10:35" },
  { id: 2, customerName: "Ngozi Okonkwo", foodOrdered: "Efo Riro & Amala", price: 1350, status: "Pending", orderTime: "2025-12-01 13:44" },
  { id: 3, customerName: "Yusuf Bello", foodOrdered: "Egusi Soup & Pounded Yam", price: 1700, status: "Delivered", orderTime: "2025-12-01 15:23" },
  { id: 4, customerName: "Fatima Abdullahi", foodOrdered: "Fried Rice & Plantain", price: 1170, status: "Cancelled", orderTime: "2025-12-01 18:11" },
  { id: 5, customerName: "Emeka Nwosu", foodOrdered: "Ofada Rice & Ayamase", price: 1590, status: "Delivered", orderTime: "2025-12-02 09:28" },
  { id: 6, customerName: "Amina Mohammed", foodOrdered: "Beans & Dodo", price: 1120, status: "Delivered", orderTime: "2025-12-02 11:10" },
  { id: 7, customerName: "Chidinma Umeh", foodOrdered: "Pepper Soup & Yam", price: 1480, status: "Pending", orderTime: "2025-12-02 13:41" },
  { id: 8, customerName: "Ibrahim Musa", foodOrdered: "Nkwobi", price: 1650, status: "Delivered", orderTime: "2025-12-02 15:52" },
  { id: 9, customerName: "Bisi Adeyemi", foodOrdered: "Moi Moi & Pap", price: 1020, status: "Delivered", orderTime: "2025-12-02 18:16" },
  { id: 10, customerName: "Oluwatobi Ajayi", foodOrdered: "Catfish Pepper Soup", price: 1350, status: "Cancelled", orderTime: "2025-12-03 09:37" },
  { id: 11, customerName: "Halima Sani", foodOrdered: "Fried Yam & Akara", price: 1200, status: "Delivered", orderTime: "2025-12-03 11:24" },
  { id: 12, customerName: "Chuka Obi", foodOrdered: "Eba & Okra Soup", price: 1550, status: "Delivered", orderTime: "2025-12-03 13:05" },
  { id: 13, customerName: "Blessing Eze", foodOrdered: "Yam Porridge", price: 1100, status: "Pending", orderTime: "2025-12-03 16:18" },
  { id: 14, customerName: "Suleiman Abdullahi", foodOrdered: "Banga Soup & Starch", price: 1680, status: "Delivered", orderTime: "2025-12-03 19:27" },
  { id: 15, customerName: "Funke Oladipo", foodOrdered: "Fisherman Soup & Fufu", price: 1600, status: "Delivered", orderTime: "2025-12-04 10:02" },
  { id: 16, customerName: "Chinyere Okafor", foodOrdered: "Jollof Spaghetti", price: 1200, status: "Cancelled", orderTime: "2025-12-04 12:28" },
  { id: 17, customerName: "Abdulrahman Bello", foodOrdered: "Ogbono Soup & Semo", price: 1500, status: "Delivered", orderTime: "2025-12-04 13:44" },
  { id: 18, customerName: "Yetunde Bakare", foodOrdered: "Yam & Egg Sauce", price: 1150, status: "Delivered", orderTime: "2025-12-04 16:12" },
  { id: 19, customerName: "Gbenga Alabi", foodOrdered: "Wheat & Afang Soup", price: 1380, status: "Pending", orderTime: "2025-12-04 18:55" },
  { id: 20, customerName: "Maryam Sulaiman", foodOrdered: "Efo Riro & Amala", price: 1430, status: "Delivered", orderTime: "2025-12-05 09:14" },
  { id: 21, customerName: "Chisom Okeke", foodOrdered: "Nkwobi", price: 1550, status: "Delivered", orderTime: "2025-12-05 10:32" },
  { id: 22, customerName: "Bashir Lawal", foodOrdered: "Egusi Soup & Pounded Yam", price: 1700, status: "Pending", orderTime: "2025-12-05 13:05" },
  { id: 23, customerName: "Esther Adeyemi", foodOrdered: "Ofada Rice & Ayamase", price: 1400, status: "Delivered", orderTime: "2025-12-05 16:11" },
  { id: 24, customerName: "Chukwudi Nnamdi", foodOrdered: "Fried Rice & Plantain", price: 1170, status: "Cancelled", orderTime: "2025-12-05 18:40" },
  { id: 25, customerName: "Abiola Afolabi", foodOrdered: "Pepper Soup & Yam", price: 1480, status: "Delivered", orderTime: "2025-12-06 09:24" },
  { id: 26, customerName: "Rashida Bello", foodOrdered: "Moi Moi & Pap", price: 1020, status: "Delivered", orderTime: "2025-12-06 11:18" },
  { id: 27, customerName: "Uchechi Okoro", foodOrdered: "Catfish Pepper Soup", price: 1350, status: "Pending", orderTime: "2025-12-06 13:44" },
  { id: 28, customerName: "Tunde Ojo", foodOrdered: "Fried Yam & Akara", price: 1200, status: "Delivered", orderTime: "2025-12-06 16:12" },
  { id: 29, customerName: "Aisha Suleiman", foodOrdered: "Eba & Okra Soup", price: 1550, status: "Delivered", orderTime: "2025-12-06 18:55" },
  { id: 30, customerName: "Chinyere Nwafor", foodOrdered: "Jollof Rice & Chicken", price: 1620, status: "Cancelled", orderTime: "2025-12-07 10:02" },
  { id: 31, customerName: "Olamide Aluko", foodOrdered: "Yam Porridge", price: 1100, status: "Delivered", orderTime: "2025-12-07 12:28" },
  { id: 32, customerName: "Sani Abubakar", foodOrdered: "Banga Soup & Starch", price: 1680, status: "Delivered", orderTime: "2025-12-07 13:44" },
  { id: 33, customerName: "Blessing Okoye", foodOrdered: "Fisherman Soup & Fufu", price: 1600, status: "Pending", orderTime: "2025-12-07 16:12" },
  { id: 34, customerName: "Chuka Okafor", foodOrdered: "Jollof Spaghetti", price: 1200, status: "Delivered", orderTime: "2025-12-07 18:55" },
  { id: 35, customerName: "Hauwa Musa", foodOrdered: "Ogbono Soup & Semo", price: 1500, status: "Delivered", orderTime: "2025-12-08 09:14" },
  { id: 36, customerName: "Gbenga Ogunbiyi", foodOrdered: "Yam & Egg Sauce", price: 1150, status: "Cancelled", orderTime: "2025-12-08 10:32" },
  { id: 37, customerName: "Chinonso Eze", foodOrdered: "Wheat & Afang Soup", price: 1380, status: "Delivered", orderTime: "2025-12-08 13:05" },
  { id: 38, customerName: "Maryam Bello", foodOrdered: "Efo Riro & Amala", price: 1430, status: "Delivered", orderTime: "2025-12-08 16:11" },
  { id: 39, customerName: "Bashir Salisu", foodOrdered: "Nkwobi", price: 1550, status: "Pending", orderTime: "2025-12-08 18:40" },
  { id: 40, customerName: "Chisom Okeke", foodOrdered: "Egusi Soup & Pounded Yam", price: 1700, status: "Delivered", orderTime: "2025-12-09 09:24" },
  { id: 41, customerName: "Esther Adeyemi", foodOrdered: "Ofada Rice & Ayamase", price: 1400, status: "Delivered", orderTime: "2025-12-09 11:18" },
  { id: 42, customerName: "Chukwudi Nnamdi", foodOrdered: "Fried Rice & Plantain", price: 1170, status: "Cancelled", orderTime: "2025-12-09 13:44" },
  { id: 43, customerName: "Abiola Afolabi", foodOrdered: "Pepper Soup & Yam", price: 1480, status: "Delivered", orderTime: "2025-12-09 16:12" },
  { id: 44, customerName: "Rashida Bello", foodOrdered: "Moi Moi & Pap", price: 1020, status: "Delivered", orderTime: "2025-12-09 18:55" },
  { id: 45, customerName: "Uchechi Okoro", foodOrdered: "Catfish Pepper Soup", price: 1350, status: "Delivered", orderTime: "2025-12-10 10:02" },
  { id: 46, customerName: "Tunde Ojo", foodOrdered: "Fried Yam & Akara", price: 1200, status: "Pending", orderTime: "2025-12-10 12:28" },
  { id: 47, customerName: "Aisha Suleiman", foodOrdered: "Eba & Okra Soup", price: 1550, status: "Delivered", orderTime: "2025-12-10 13:44" },
  { id: 48, customerName: "Chinyere Nwafor", foodOrdered: "Jollof Rice & Chicken", price: 1620, status: "Delivered", orderTime: "2025-12-10 16:12" },
  { id: 49, customerName: "Olamide Aluko", foodOrdered: "Yam Porridge", price: 1100, status: "Cancelled", orderTime: "2025-12-10 18:55" },
  { id: 50, customerName: "Sani Abubakar", foodOrdered: "Banga Soup & Starch", price: 1680, status: "Delivered", orderTime: "2025-12-11 09:14" },
  { id: 51, customerName: "Blessing Okoye", foodOrdered: "Fisherman Soup & Fufu", price: 1600, status: "Delivered", orderTime: "2025-12-11 10:32" },
  { id: 52, customerName: "Chuka Okafor", foodOrdered: "Jollof Spaghetti", price: 1200, status: "Pending", orderTime: "2025-12-11 13:05" },
  { id: 53, customerName: "Hauwa Musa", foodOrdered: "Ogbono Soup & Semo", price: 1500, status: "Delivered", orderTime: "2025-12-11 16:11" },
  { id: 54, customerName: "Gbenga Ogunbiyi", foodOrdered: "Yam & Egg Sauce", price: 1150, status: "Delivered", orderTime: "2025-12-11 18:40" },
  { id: 55, customerName: "Chinonso Eze", foodOrdered: "Wheat & Afang Soup", price: 1380, status: "Cancelled", orderTime: "2025-12-12 09:24" },
  { id: 56, customerName: "Maryam Bello", foodOrdered: "Efo Riro & Amala", price: 1430, status: "Delivered", orderTime: "2025-12-12 11:18" },
  { id: 57, customerName: "Bashir Salisu", foodOrdered: "Nkwobi", price: 1550, status: "Delivered", orderTime: "2025-12-12 13:44" },
  { id: 58, customerName: "Chisom Okeke", foodOrdered: "Egusi Soup & Pounded Yam", price: 1700, status: "Pending", orderTime: "2025-12-12 16:12" },
  { id: 59, customerName: "Esther Adeyemi", foodOrdered: "Ofada Rice & Ayamase", price: 1400, status: "Delivered", orderTime: "2025-12-12 18:55" },
  { id: 60, customerName: "Chukwudi Nnamdi", foodOrdered: "Fried Rice & Plantain", price: 1170, status: "Delivered", orderTime: "2025-12-13 10:02" },
  { id: 61, customerName: "Abiola Afolabi", foodOrdered: "Pepper Soup & Yam", price: 1480, status: "Cancelled", orderTime: "2025-12-13 12:28" },
  { id: 62, customerName: "Rashida Bello", foodOrdered: "Moi Moi & Pap", price: 1020, status: "Delivered", orderTime: "2025-12-13 13:44" },
  { id: 63, customerName: "Uchechi Okoro", foodOrdered: "Catfish Pepper Soup", price: 1350, status: "Delivered", orderTime: "2025-12-13 16:12" },
  { id: 64, customerName: "Tunde Ojo", foodOrdered: "Fried Yam & Akara", price: 1200, status: "Pending", orderTime: "2025-12-13 18:55" },
  { id: 65, customerName: "Aisha Suleiman", foodOrdered: "Eba & Okra Soup", price: 1550, status: "Delivered", orderTime: "2025-12-14 09:14" },
  { id: 66, customerName: "Chinyere Nwafor", foodOrdered: "Jollof Rice & Chicken", price: 1620, status: "Delivered", orderTime: "2025-12-14 10:32" },
  { id: 67, customerName: "Olamide Aluko", foodOrdered: "Yam Porridge", price: 1100, status: "Cancelled", orderTime: "2025-12-14 13:05" },
  { id: 68, customerName: "Sani Abubakar", foodOrdered: "Banga Soup & Starch", price: 1680, status: "Delivered", orderTime: "2025-12-14 16:11" },
  { id: 69, customerName: "Blessing Okoye", foodOrdered: "Fisherman Soup & Fufu", price: 1600, status: "Delivered", orderTime: "2025-12-14 18:40" },
  { id: 70, customerName: "Chuka Okafor", foodOrdered: "Jollof Spaghetti", price: 1200, status: "Pending", orderTime: "2025-12-15 09:24" },
  { id: 71, customerName: "Hauwa Musa", foodOrdered: "Ogbono Soup & Semo", price: 1500, status: "Delivered", orderTime: "2025-12-15 11:18" },
  { id: 72, customerName: "Gbenga Ogunbiyi", foodOrdered: "Yam & Egg Sauce", price: 1150, status: "Delivered", orderTime: "2025-12-15 13:44" },
  { id: 73, customerName: "Chinonso Eze", foodOrdered: "Wheat & Afang Soup", price: 1380, status: "Cancelled", orderTime: "2025-12-15 16:12" },
  { id: 74, customerName: "Maryam Bello", foodOrdered: "Efo Riro & Amala", price: 1430, status: "Delivered", orderTime: "2025-12-15 18:55" },
  { id: 75, customerName: "Bashir Salisu", foodOrdered: "Nkwobi", price: 1550, status: "Delivered", orderTime: "2025-12-16 10:02" },
  { id: 76, customerName: "Chisom Okeke", foodOrdered: "Egusi Soup & Pounded Yam", price: 1700, status: "Pending", orderTime: "2025-12-16 12:28" },
  { id: 77, customerName: "Esther Adeyemi", foodOrdered: "Ofada Rice & Ayamase", price: 1400, status: "Delivered", orderTime: "2025-12-16 13:44" },
  { id: 78, customerName: "Chukwudi Nnamdi", foodOrdered: "Fried Rice & Plantain", price: 1170, status: "Delivered", orderTime: "2025-12-16 16:12" },
  { id: 79, customerName: "Abiola Afolabi", foodOrdered: "Pepper Soup & Yam", price: 1480, status: "Cancelled", orderTime: "2025-12-16 18:55" },
  { id: 80, customerName: "Rashida Bello", foodOrdered: "Moi Moi & Pap", price: 1020, status: "Delivered", orderTime: "2025-12-17 09:14" },
  { id: 81, customerName: "Uchechi Okoro", foodOrdered: "Catfish Pepper Soup", price: 1350, status: "Delivered", orderTime: "2025-12-17 10:32" },
  { id: 82, customerName: "Tunde Ojo", foodOrdered: "Fried Yam & Akara", price: 1200, status: "Pending", orderTime: "2025-12-17 13:05" },
  { id: 83, customerName: "Aisha Suleiman", foodOrdered: "Eba & Okra Soup", price: 1550, status: "Delivered", orderTime: "2025-12-17 16:11" },
  { id: 84, customerName: "Chinyere Nwafor", foodOrdered: "Jollof Rice & Chicken", price: 1620, status: "Delivered", orderTime: "2025-12-17 18:40" },
  { id: 85, customerName: "Olamide Aluko", foodOrdered: "Yam Porridge", price: 1100, status: "Cancelled", orderTime: "2025-12-18 09:24" },
  { id: 86, customerName: "Sani Abubakar", foodOrdered: "Banga Soup & Starch", price: 1680, status: "Delivered", orderTime: "2025-12-18 11:18" },
  { id: 87, customerName: "Blessing Okoye", foodOrdered: "Fisherman Soup & Fufu", price: 1600, status: "Delivered", orderTime: "2025-12-18 13:44" },
  { id: 88, customerName: "Chuka Okafor", foodOrdered: "Jollof Spaghetti", price: 1200, status: "Pending", orderTime: "2025-12-18 16:12" },
  { id: 89, customerName: "Hauwa Musa", foodOrdered: "Ogbono Soup & Semo", price: 1500, status: "Delivered", orderTime: "2025-12-18 18:55" },
  { id: 90, customerName: "Gbenga Ogunbiyi", foodOrdered: "Yam & Egg Sauce", price: 1150, status: "Delivered", orderTime: "2025-12-19 10:02" },
  { id: 91, customerName: "Chinonso Eze", foodOrdered: "Wheat & Afang Soup", price: 1380, status: "Cancelled", orderTime: "2025-12-19 12:28" },
  { id: 92, customerName: "Maryam Bello", foodOrdered: "Efo Riro & Amala", price: 1430, status: "Delivered", orderTime: "2025-12-19 13:44" },
  { id: 93, customerName: "Bashir Salisu", foodOrdered: "Nkwobi", price: 1550, status: "Delivered", orderTime: "2025-12-19 16:12" },
  { id: 94, customerName: "Chisom Okeke", foodOrdered: "Egusi Soup & Pounded Yam", price: 1700, status: "Pending", orderTime: "2025-12-19 18:55" },
  { id: 95, customerName: "Esther Adeyemi", foodOrdered: "Ofada Rice & Ayamase", price: 1400, status: "Delivered", orderTime: "2025-12-20 09:14" },
  { id: 96, customerName: "Chukwudi Nnamdi", foodOrdered: "Fried Rice & Plantain", price: 1170, status: "Delivered", orderTime: "2025-12-20 10:32" },
  { id: 97, customerName: "Abiola Afolabi", foodOrdered: "Pepper Soup & Yam", price: 1480, status: "Cancelled", orderTime: "2025-12-20 13:05" },
  { id: 98, customerName: "Rashida Bello", foodOrdered: "Moi Moi & Pap", price: 1020, status: "Delivered", orderTime: "2025-12-20 16:11" },
  { id: 99, customerName: "Uchechi Okoro", foodOrdered: "Catfish Pepper Soup", price: 1350, status: "Delivered", orderTime: "2025-12-20 18:40" },
  { id: 100, customerName: "Tunde Ojo", foodOrdered: "Fried Yam & Akara", price: 1200, status: "Pending", orderTime: "2025-12-23 13:05" },
  { id: 101, customerName: "Tolu Fashola", foodOrdered: "Jollof Rice & Chicken", price: 1620, status: "Delivered", orderTime: "2025-12-23 18:55" }
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