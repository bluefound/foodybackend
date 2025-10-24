import React, { useState } from 'react';

const App = () => {
  const [statusFilter, setStatusFilter] = useState('All');

  // Fresh orders from October 1-7, 2025
  const orders = [
    { id: 1, customerName: "Chioma Nwankwo", foodOrdered: "Jollof Rice & Chicken", price: 3500, status: "Delivered", orderTime: "2025-10-01 08:15" },
    { id: 2, customerName: "Oluwaseun Adebayo", foodOrdered: "Fried Rice & Plantain", price: 3200, status: "Delivered", orderTime: "2025-10-01 09:30" },
    { id: 3, customerName: "Amaka Okafor", foodOrdered: "Egusi Soup & Pounded Yam", price: 4000, status: "Delivered", orderTime: "2025-10-01 11:45" },
    { id: 4, customerName: "Ibrahim Musa", foodOrdered: "Suya & Chips", price: 2800, status: "Delivered", orderTime: "2025-10-01 13:20" },
    { id: 5, customerName: "Blessing Okonkwo", foodOrdered: "Pepper Soup & Catfish", price: 4500, status: "Cancelled", orderTime: "2025-10-01 15:10" },
    { id: 6, customerName: "Chukwudi Eze", foodOrdered: "Amala & Ewedu", price: 2500, status: "Delivered", orderTime: "2025-10-01 17:00" },
    
    { id: 7, customerName: "Fatima Abdullahi", foodOrdered: "Jollof Rice & Turkey", price: 4200, status: "Delivered", orderTime: "2025-10-02 08:00" },
    { id: 8, customerName: "Emeka Obi", foodOrdered: "Okra Soup & Fufu", price: 3800, status: "Delivered", orderTime: "2025-10-02 09:25" },
    { id: 9, customerName: "Aisha Mohammed", foodOrdered: "Fried Rice & Fish", price: 3600, status: "Delivered", orderTime: "2025-10-02 10:50" },
    { id: 10, customerName: "Tunde Bakare", foodOrdered: "Beans & Plantain (Ewa Agoyin)", price: 2000, status: "Delivered", orderTime: "2025-10-02 12:15" },
    { id: 11, customerName: "Ngozi Chukwu", foodOrdered: "Afang Soup & Garri", price: 3500, status: "Pending", orderTime: "2025-10-02 14:30" },
    { id: 12, customerName: "Yusuf Bello", foodOrdered: "Indomie & Egg", price: 1500, status: "Delivered", orderTime: "2025-10-02 16:45" },
    
    { id: 13, customerName: "Adaeze Nnamdi", foodOrdered: "Ofada Rice & Ayamase Sauce", price: 3900, status: "Delivered", orderTime: "2025-10-03 07:45" },
    { id: 14, customerName: "Bashir Ahmad", foodOrdered: "White Rice & Chicken Stew", price: 3000, status: "Delivered", orderTime: "2025-10-03 09:10" },
    { id: 15, customerName: "Chiamaka Okeke", foodOrdered: "Edikang Ikong Soup & Eba", price: 4200, status: "Delivered", orderTime: "2025-10-03 11:20" },
    { id: 16, customerName: "Ahmed Lawal", foodOrdered: "Shawarma & Drink", price: 2200, status: "Delivered", orderTime: "2025-10-03 13:35" },
    { id: 17, customerName: "Joy Nwachukwu", foodOrdered: "Yam Porridge", price: 2700, status: "Cancelled", orderTime: "2025-10-03 15:10" },
    { id: 18, customerName: "Kabir Hassan", foodOrdered: "Moi Moi & Pap", price: 1800, status: "Delivered", orderTime: "2025-10-03 17:20" },
    { id: 19, customerName: "Nneka Udeh", foodOrdered: "Coconut Rice & Chicken", price: 3700, status: "Delivered", orderTime: "2025-10-03 19:10" },
    
    { id: 20, customerName: "Segun Olaniyan", foodOrdered: "Jollof Rice & Beef", price: 3400, status: "Delivered", orderTime: "2025-10-04 08:30" },
    { id: 21, customerName: "Zainab Usman", foodOrdered: "Banga Soup & Starch", price: 4000, status: "Delivered", orderTime: "2025-10-04 10:00" },
    { id: 22, customerName: "Chidera Onuoha", foodOrdered: "Fried Rice & Prawn", price: 4500, status: "Pending", orderTime: "2025-10-04 11:45" },
    { id: 23, customerName: "Mustapha Ibrahim", foodOrdered: "Tuwo Shinkafa & Miyan Kuka", price: 2800, status: "Delivered", orderTime: "2025-10-04 13:15" },
    { id: 24, customerName: "Ifeoma Nwosu", foodOrdered: "Nsala Soup & Pounded Yam", price: 4100, status: "Delivered", orderTime: "2025-10-04 15:30" },
    { id: 25, customerName: "Abdulrahman Suleiman", foodOrdered: "Pepper Soup & Ram Meat", price: 5000, status: "Delivered", orderTime: "2025-10-04 17:00" },
    { id: 26, customerName: "Funke Ajayi", foodOrdered: "Efo Riro & Amala", price: 3200, status: "Delivered", orderTime: "2025-10-04 18:45" },
    
    { id: 27, customerName: "Uche Okafor", foodOrdered: "Jollof Spaghetti", price: 2500, status: "Delivered", orderTime: "2025-10-05 08:20" },
    { id: 28, customerName: "Halima Yusuf", foodOrdered: "Asun & Chips", price: 3500, status: "Delivered", orderTime: "2025-10-05 10:15" },
    { id: 29, customerName: "Kelechi Nnaji", foodOrdered: "Nkwobi & Ugba", price: 3800, status: "Delivered", orderTime: "2025-10-05 12:00" },
    { id: 30, customerName: "Maryam Bala", foodOrdered: "Masa & Miyan Taushe", price: 2000, status: "Cancelled", orderTime: "2025-10-05 13:40" },
    { id: 31, customerName: "Obinna Eze", foodOrdered: "Oha Soup & Fufu", price: 3600, status: "Delivered", orderTime: "2025-10-05 15:25" },
    { id: 32, customerName: "Rukayat Adamu", foodOrdered: "White Rice & Egusi Soup", price: 3300, status: "Delivered", orderTime: "2025-10-05 17:10" },
    { id: 33, customerName: "Chinedu Okonkwo", foodOrdered: "Abacha & Ugba", price: 2800, status: "Pending", orderTime: "2025-10-05 19:00" },
    
    { id: 34, customerName: "Hauwa Aliyu", foodOrdered: "Jollof Rice & Goat Meat", price: 4000, status: "Delivered", orderTime: "2025-10-06 09:00" },
    { id: 35, customerName: "Chukwuemeka Nwankwo", foodOrdered: "Ogbono Soup & Eba", price: 3500, status: "Delivered", orderTime: "2025-10-06 11:30" },
    { id: 36, customerName: "Amina Garba", foodOrdered: "Fried Rice & Gizzard", price: 3700, status: "Delivered", orderTime: "2025-10-06 13:20" },
    { id: 37, customerName: "Kenneth Udo", foodOrdered: "Afang Soup & Semovita", price: 3900, status: "Pending", orderTime: "2025-10-06 15:10" },
    
    { id: 38, customerName: "Rachael Okoro", foodOrdered: "Jollof Rice & Croaker Fish", price: 4200, status: "Delivered", orderTime: "2025-10-07 08:45" },
    { id: 39, customerName: "Abdullahi Musa", foodOrdered: "Vegetable Soup & Wheat", price: 3000, status: "Pending", orderTime: "2025-10-07 12:30" },
    { id: 40, customerName: "Chinonso Ikenna", foodOrdered: "Fried Rice & Snail", price: 4800, status: "Pending", orderTime: "2025-10-07 16:00" },
    
    { id: 41, customerName: "Tolani Adeleke", foodOrdered: "Jollof Rice & Fried Plantain", price: 3100, status: "Delivered", orderTime: "2025-10-08 08:00" },
    { id: 42, customerName: "Suleiman Yusuf", foodOrdered: "Pounded Yam & Egusi Soup", price: 3900, status: "Delivered", orderTime: "2025-10-08 10:20" },
    { id: 43, customerName: "Chinenye Obi", foodOrdered: "White Rice & Fisherman Soup", price: 4300, status: "Pending", orderTime: "2025-10-08 12:15" },
    { id: 44, customerName: "Yakubu Tanko", foodOrdered: "Semo & Okra Soup", price: 2900, status: "Delivered", orderTime: "2025-10-08 14:00" },
    { id: 45, customerName: "Bisola Adeyemi", foodOrdered: "Gizdodo (Gizzard & Plantain)", price: 3500, status: "Delivered", orderTime: "2025-10-08 15:45" },
    { id: 46, customerName: "Nnamdi Azikiwe", foodOrdered: "Ofe Nsala & Fufu", price: 4100, status: "Cancelled", orderTime: "2025-10-08 17:30" },
    { id: 47, customerName: "Khadijah Bello", foodOrdered: "Fried Rice & Chicken Wings", price: 3800, status: "Delivered", orderTime: "2025-10-08 19:15" },
    { id: 48, customerName: "Tochukwu Nnadi", foodOrdered: "Jollof Rice & Grilled Fish", price: 4000, status: "Delivered", orderTime: "2025-10-08 20:30" },
    
    { id: 49, customerName: "Blessing Adewale", foodOrdered: "Ofada Rice & Designer Stew", price: 3600, status: "Delivered", orderTime: "2025-10-09 08:30" },
    { id: 50, customerName: "Usman Danjuma", foodOrdered: "Tuwo Masara & Miyan Kuka", price: 2700, status: "Delivered", orderTime: "2025-10-09 10:45" },
    { id: 51, customerName: "Nkechi Okafor", foodOrdered: "Bitterleaf Soup & Garri", price: 3200, status: "Delivered", orderTime: "2025-10-09 12:30" },
    { id: 52, customerName: "Ibrahim Lawal", foodOrdered: "Chicken Pepper Soup & Agidi", price: 3400, status: "Pending", orderTime: "2025-10-09 14:20" },
    { id: 53, customerName: "Oluchi Nwachukwu", foodOrdered: "Fried Yam & Egg Sauce", price: 2100, status: "Delivered", orderTime: "2025-10-09 16:00" },
    { id: 54, customerName: "Sani Mohammed", foodOrdered: "Jollof Rice & Peppered Snail", price: 5200, status: "Pending", orderTime: "2025-10-09 18:10" },
    { id: 55, customerName: "Adanna Nwosu", foodOrdered: "Coconut Fried Rice & Shrimp", price: 4700, status: "Delivered", orderTime: "2025-10-09 20:00" },
    
    { id: 56, customerName: "Folake Adeyinka", foodOrdered: "Ewa Agoyin & Bread", price: 2200, status: "Delivered", orderTime: "2025-10-10 08:15" },
    { id: 57, customerName: "Emmanuel Okwu", foodOrdered: "Okra Soup & Semovita", price: 3100, status: "Pending", orderTime: "2025-10-10 10:30" },
    { id: 58, customerName: "Hauwa Garba", foodOrdered: "Jollof Rice & Beef", price: 3800, status: "Delivered", orderTime: "2025-10-10 12:45" },
    { id: 59, customerName: "Chijioke Nnamani", foodOrdered: "Fisherman Soup & Eba", price: 4300, status: "Delivered", orderTime: "2025-10-10 15:20" },
    
    { id: 60, customerName: "Zara Ibrahim", foodOrdered: "Vegetable Yam Porridge", price: 2800, status: "Delivered", orderTime: "2025-10-11 09:00" },
    { id: 61, customerName: "David Okafor", foodOrdered: "Pepper Soup & Catfish", price: 4600, status: "Pending", orderTime: "2025-10-11 11:15" },
    { id: 62, customerName: "Amina Suleiman", foodOrdered: "Fried Rice & Turkey", price: 4200, status: "Delivered", orderTime: "2025-10-11 13:30" },
    { id: 63, customerName: "Sunday Eke", foodOrdered: "Banga Soup & Starch", price: 3900, status: "Cancelled", orderTime: "2025-10-11 16:45" },
    
    { id: 64, customerName: "Kemi Balogun", foodOrdered: "Amala & Gbegiri Soup", price: 2500, status: "Delivered", orderTime: "2025-10-12 08:30" },
    { id: 65, customerName: "Victor Nwosu", foodOrdered: "Nsala Soup & Fufu", price: 4100, status: "Delivered", orderTime: "2025-10-12 10:20" },
    { id: 66, customerName: "Safiya Musa", foodOrdered: "Jollof Rice & Chicken", price: 3500, status: "Pending", orderTime: "2025-10-12 12:10" },
    { id: 67, customerName: "Peter Adebayo", foodOrdered: "Edikang Ikong & Eba", price: 4400, status: "Delivered", orderTime: "2025-10-12 14:55" },
    
    { id: 68, customerName: "Grace Okoro", foodOrdered: "Ogbono Soup & Pounded Yam", price: 3700, status: "Delivered", orderTime: "2025-10-13 09:15" },
    { id: 69, customerName: "Mustafa Ahmed", foodOrdered: "Suya & Plantain", price: 2900, status: "Delivered", orderTime: "2025-10-13 11:30" },
    { id: 70, customerName: "Patience Uche", foodOrdered: "Afang Soup & Garri", price: 3300, status: "Pending", orderTime: "2025-10-13 13:45" },
    { id: 71, customerName: "Ibrahim Abdullahi", foodOrdered: "White Rice & Stew", price: 2600, status: "Delivered", orderTime: "2025-10-13 16:00" },
    
    { id: 72, customerName: "Blessing Emmanuel", foodOrdered: "Coconut Rice & Fish", price: 3800, status: "Cancelled", orderTime: "2025-10-14 08:45" },
    { id: 73, customerName: "Sani Garba", foodOrdered: "Moi Moi & Akara", price: 1800, status: "Delivered", orderTime: "2025-10-14 10:30" },
    
    { id: 74, customerName: "Mary John", foodOrdered: "Bitterleaf Soup & Eba", price: 3200, status: "Delivered", orderTime: "2025-10-15 09:20" },
    { id: 75, customerName: "Yusuf Bello", foodOrdered: "Jollof Rice & Croaker", price: 4100, status: "Pending", orderTime: "2025-10-15 11:45" },

    // New orders from October 16-23, 2025
    { id: 76, customerName: "Grace Okafor", foodOrdered: "Fried Rice & Chicken", price: 3800, status: "Delivered", orderTime: "2025-10-16 08:30" },
    { id: 77, customerName: "Ibrahim Musa", foodOrdered: "Egusi Soup & Pounded Yam", price: 4200, status: "Pending", orderTime: "2025-10-16 10:15" },
    { id: 78, customerName: "Chinwe Nwosu", foodOrdered: "Jollof Rice & Turkey", price: 4500, status: "Delivered", orderTime: "2025-10-16 12:45" },
    { id: 79, customerName: "Ahmed Hassan", foodOrdered: "Suya & Plantain", price: 3200, status: "Delivered", orderTime: "2025-10-16 15:20" },
    { id: 80, customerName: "Blessing Adebayo", foodOrdered: "Pepper Soup & Catfish", price: 4800, status: "Cancelled", orderTime: "2025-10-16 18:00" },

    { id: 81, customerName: "Emeka Okwu", foodOrdered: "Amala & Ewedu Soup", price: 2800, status: "Delivered", orderTime: "2025-10-17 09:00" },
    { id: 82, customerName: "Fatima Abdullahi", foodOrdered: "Fried Rice & Fish", price: 3900, status: "Delivered", orderTime: "2025-10-17 11:30" },
    { id: 83, customerName: "Chukwuma Nnamdi", foodOrdered: "Okra Soup & Fufu", price: 3500, status: "Pending", orderTime: "2025-10-17 13:15" },
    { id: 84, customerName: "Aisha Mohammed", foodOrdered: "Jollof Spaghetti", price: 3100, status: "Delivered", orderTime: "2025-10-17 16:45" },
    { id: 85, customerName: "Tunde Bakare", foodOrdered: "Banga Soup & Starch", price: 4100, status: "Delivered", orderTime: "2025-10-17 19:20" },

    { id: 86, customerName: "Ngozi Chukwu", foodOrdered: "White Rice & Stew", price: 2900, status: "Delivered", orderTime: "2025-10-18 08:15" },
    { id: 87, customerName: "Yusuf Bello", foodOrdered: "Edikang Ikong & Eba", price: 4300, status: "Delivered", orderTime: "2025-10-18 10:30" },
    { id: 88, customerName: "Adaeze Nnamdi", foodOrdered: "Coconut Rice & Shrimp", price: 4600, status: "Pending", orderTime: "2025-10-18 12:00" },
    { id: 89, customerName: "Bashir Ahmad", foodOrdered: "Nsala Soup & Pounded Yam", price: 4000, status: "Delivered", orderTime: "2025-10-18 14:30" },
    { id: 90, customerName: "Joy Nwachukwu", foodOrdered: "Moi Moi & Pap", price: 1900, status: "Delivered", orderTime: "2025-10-18 17:15" },

    { id: 91, customerName: "Segun Olaniyan", foodOrdered: "Fried Rice & Gizzard", price: 3700, status: "Cancelled", orderTime: "2025-10-19 09:45" },
    { id: 92, customerName: "Zainab Usman", foodOrdered: "Afang Soup & Garri", price: 3400, status: "Delivered", orderTime: "2025-10-19 11:20" },
    { id: 93, customerName: "Chidera Onuoha", foodOrdered: "Yam Porridge", price: 2600, status: "Delivered", orderTime: "2025-10-19 13:45" },
    { id: 94, customerName: "Mustapha Ibrahim", foodOrdered: "Semo & Okra Soup", price: 3000, status: "Pending", orderTime: "2025-10-19 15:30" },
    { id: 95, customerName: "Ifeoma Nwosu", foodOrdered: "Gizdodo (Gizzard & Plantain)", price: 3600, status: "Delivered", orderTime: "2025-10-19 18:00" },

    { id: 96, customerName: "Abdulrahman Suleiman", foodOrdered: "Ogbono Soup & Eba", price: 3800, status: "Delivered", orderTime: "2025-10-20 08:30" },
    { id: 97, customerName: "Funke Ajayi", foodOrdered: "Jollof Rice & Beef", price: 3500, status: "Delivered", orderTime: "2025-10-20 10:15" },
    { id: 98, customerName: "Uche Okafor", foodOrdered: "Fisherman Soup & Fufu", price: 4400, status: "Delivered", orderTime: "2025-10-20 12:30" },
    { id: 99, customerName: "Halima Yusuf", foodOrdered: "Tuwo Shinkafa & Miyan Kuka", price: 2700, status: "Pending", orderTime: "2025-10-20 14:45" },
    { id: 100, customerName: "Kelechi Nnaji", foodOrdered: "Pepper Soup & Goat Meat", price: 5000, status: "Delivered", orderTime: "2025-10-20 16:30" },

    { id: 101, customerName: "Maryam Bala", foodOrdered: "Ofada Rice & Ayamase", price: 3900, status: "Delivered", orderTime: "2025-10-21 09:00" },
    { id: 102, customerName: "Chinedu Okonkwo", foodOrdered: "Bitterleaf Soup & Semovita", price: 3300, status: "Delivered", orderTime: "2025-10-21 11:15" },
    { id: 103, customerName: "Hauwa Aliyu", foodOrdered: "Chicken Pepper Soup", price: 3500, status: "Cancelled", orderTime: "2025-10-21 13:30" },
    { id: 104, customerName: "Chukwuemeka Nwankwo", foodOrdered: "Fried Yam & Egg Sauce", price: 2200, status: "Delivered", orderTime: "2025-10-21 15:45" },
    { id: 105, customerName: "Amina Garba", foodOrdered: "Abacha & Ugba", price: 2900, status: "Pending", orderTime: "2025-10-21 18:00" },

    { id: 106, customerName: "Kenneth Udo", foodOrdered: "Ewa Agoyin & Bread", price: 2300, status: "Delivered", orderTime: "2025-10-22 08:45" },
    { id: 107, customerName: "Safiya Musa", foodOrdered: "Vegetable Soup & Wheat", price: 3100, status: "Delivered", orderTime: "2025-10-22 10:30" },
    { id: 108, customerName: "Peter Adebayo", foodOrdered: "Coconut Fried Rice & Chicken", price: 4200, status: "Delivered", orderTime: "2025-10-22 12:15" },
    { id: 109, customerName: "Grace Okoro", foodOrdered: "Asun & Chips", price: 3800, status: "Pending", orderTime: "2025-10-22 14:00" },
    { id: 110, customerName: "Mustafa Ahmed", foodOrdered: "Nkwobi & Plantain", price: 3900, status: "Delivered", orderTime: "2025-10-22 16:45" },

    { id: 111, customerName: "Patience Uche", foodOrdered: "Jollof Rice & Grilled Fish", price: 4100, status: "Delivered", orderTime: "2025-10-23 09:15" },
    { id: 112, customerName: "Ibrahim Abdullahi", foodOrdered: "Masa & Miyan Taushe", price: 2100, status: "Delivered", orderTime: "2025-10-23 11:00" },
    { id: 113, customerName: "Blessing Emmanuel", foodOrdered: "Ofe Nsala & Semovita", price: 4000, status: "Delivered", orderTime: "2025-10-23 13:30" },
    { id: 114, customerName: "Sani Garba", foodOrdered: "Shawarma & Drink", price: 2500, status: "Pending", orderTime: "2025-10-23 15:15" },
    { id: 115, customerName: "Mary John", foodOrdered: "Indomie & Egg", price: 1600, status: "Delivered", orderTime: "2025-10-23 17:45" }
  ];

  const filteredOrders = statusFilter === 'All' 
    ? orders 
    : orders.filter(order => order.status === statusFilter);

  const getStatusColor = (status) => {
    switch (status) {
      case 'Pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'Delivered':
        return 'bg-green-100 text-green-800';
      case 'Cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Foody</h1>
          <p className="text-lg text-gray-600">Order Monitoring Dashboard</p>
        </div>

        {/* Filter Bar */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-2 sm:mb-0">
                Orders ({filteredOrders.length})
              </h2>
            </div>
            <div className="flex items-center space-x-4">
              <label htmlFor="status-filter" className="text-sm font-medium text-gray-700">
                Filter by Status:
              </label>
              <select
                id="status-filter"
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="block w-full sm:w-auto px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="All">All Orders</option>
                <option value="Pending">Pending</option>
                <option value="Delivered">Delivered</option>
                <option value="Cancelled">Cancelled</option>
              </select>
            </div>
          </div>
        </div>

        {/* Orders Table */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Customer Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Food Ordered
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Price
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Order Time
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredOrders.map((order) => (
                  <tr key={order.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">
                        {order.customerName}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900">
                        {order.foodOrdered}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">
                        ₦{order.price.toLocaleString()}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(order.status)}`}>
                        {order.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {order.orderTime}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Empty State */}
        {filteredOrders.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-500 text-lg">
              No orders found for the selected status.
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default App; 
