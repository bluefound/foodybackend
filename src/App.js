import React, { useState } from 'react';

const App = () => {
  const [statusFilter, setStatusFilter] = useState('All');

  // Updated orders with dates between August 1-22, 2025
  const orders = [
    { id: 1, customerName: "Adebayo Okechukwu", foodOrdered: "Jollof Rice and Chicken", price: 2500, status: "Delivered", orderTime: "2025-09-01 09:15" },
    { id: 2, customerName: "Fatima Hassan", foodOrdered: "Fried Rice and Chicken", price: 1800, status: "Delivered", orderTime: "2025-09-01 11:30" },
    { id: 3, customerName: "Chukwudi Nwankwo", foodOrdered: "Pounded Yam and Egusi", price: 2800, status: "Delivered", orderTime: "2025-09-01 13:45" },
    { id: 4, customerName: "Aisha Bello", foodOrdered: "Amala and Ewedu", price: 2200, status: "Cancelled", orderTime: "2025-09-02 14:20" },
    { id: 5, customerName: "Emeka Okonkwo", foodOrdered: "Beef Suya", price: 1500, status: "Delivered", orderTime: "2025-09-02 16:30" },
    { id: 6, customerName: "Hauwa Usman", foodOrdered: "Ofada Rice and Sauce", price: 3000, status: "Delivered", orderTime: "2025-09-03 10:15" },
    { id: 7, customerName: "Oluwaseun Adebayo", foodOrdered: "Eba and Okro Soup", price: 2000, status: "Preparing", orderTime: "2025-09-03 12:45" },
    { id: 8, customerName: "Ibrahim Musa", foodOrdered: "Plantain and Egg Sauce", price: 1200, status: "Delivered", orderTime: "2025-09-04 08:30" },
    { id: 9, customerName: "Ngozi Eze", foodOrdered: "Pepper Soup", price: 2500, status: "Out for Delivery", orderTime: "2025-09-04 13:15" },
    { id: 10, customerName: "Yusuf Bello", foodOrdered: "Yam Porridge", price: 1800, status: "Delivered", orderTime: "2025-09-05 11:00" },
    { id: 11, customerName: "Amina Suleiman", foodOrdered: "Jollof Rice and Chicken", price: 2500, status: "Delivered", orderTime: "2025-09-05 14:30" },
    { id: 12, customerName: "Chinedu Okafor", foodOrdered: "Fried Rice and Chicken", price: 1800, status: "Cancelled", orderTime: "2025-09-06 09:45" },
    { id: 13, customerName: "Funke Adeleke", foodOrdered: "Pounded Yam and Egusi", price: 2800, status: "Delivered", orderTime: "2025-09-06 12:15" },
    { id: 14, customerName: "Oluwaseun Bakare", foodOrdered: "Amala and Ewedu", price: 2200, status: "Preparing", orderTime: "2025-09-07 10:30" },
    { id: 15, customerName: "Ibrahim Nwosu", foodOrdered: "Beef Suya", price: 1500, status: "Delivered", orderTime: "2025-09-07 15:45" },
    { id: 16, customerName: "Ngozi Chukwu", foodOrdered: "Ofada Rice and Sauce", price: 3000, status: "Out for Delivery", orderTime: "2025-09-08 11:20" },
    { id: 17, customerName: "Yusuf Eze", foodOrdered: "Eba and Okro Soup", price: 2000, status: "Delivered", orderTime: "2025-09-08 13:30" },
    { id: 18, customerName: "Amina Okafor", foodOrdered: "Plantain and Egg Sauce", price: 1200, status: "Delivered", orderTime: "2025-09-09 09:15" },
    { id: 19, customerName: "Chinedu Suleiman", foodOrdered: "Pepper Soup", price: 2500, status: "Cancelled", orderTime: "2025-09-09 14:00" },
    { id: 20, customerName: "Funke Nwankwo", foodOrdered: "Yam Porridge", price: 1800, status: "Delivered", orderTime: "2025-09-10 10:45" },
    { id: 21, customerName: "Oluwaseun Hassan", foodOrdered: "Jollof Rice and Chicken", price: 2500, status: "Preparing", orderTime: "2025-09-10 12:30" },
    { id: 22, customerName: "Ibrahim Okechukwu", foodOrdered: "Fried Rice and Chicken", price: 1800, status: "Delivered", orderTime: "2025-09-10 13:15" },
    { id: 23, customerName: "Ngozi Bello", foodOrdered: "Pounded Yam and Egusi", price: 2800, status: "Out for Delivery", orderTime: "2025-09-10 15:30" },
    { id: 24, customerName: "Yusuf Okonkwo", foodOrdered: "Amala and Ewedu", price: 2200, status: "Delivered", orderTime: "2025-09-10 16:45" },
    { id: 25, customerName: "Amina Usman", foodOrdered: "Beef Suya", price: 1500, status: "Delivered", orderTime: "2025-09-10 18:00" },
    // New orders for September 11-15, 2025
    { id: 26, customerName: "Oluwaseun Adebayo", foodOrdered: "Ofada Rice and Sauce", price: 3000, status: "Delivered", orderTime: "2025-09-11 08:30" },
    { id: 27, customerName: "Ibrahim Musa", foodOrdered: "Eba and Okro Soup", price: 2000, status: "Delivered", orderTime: "2025-09-11 10:15" },
    { id: 28, customerName: "Ngozi Eze", foodOrdered: "Plantain and Egg Sauce", price: 1200, status: "Out for Delivery", orderTime: "2025-09-11 11:45" },
    { id: 29, customerName: "Yusuf Bello", foodOrdered: "Pepper Soup", price: 2500, status: "Preparing", orderTime: "2025-09-11 13:20" },
    { id: 30, customerName: "Amina Suleiman", foodOrdered: "Yam Porridge", price: 1800, status: "Delivered", orderTime: "2025-09-11 15:00" },
    { id: 31, customerName: "Chinedu Okafor", foodOrdered: "Jollof Rice and Chicken", price: 2500, status: "Delivered", orderTime: "2025-09-11 16:30" },
    { id: 32, customerName: "Funke Adeleke", foodOrdered: "Fried Rice and Chicken", price: 1800, status: "Cancelled", orderTime: "2025-09-11 18:15" },
    { id: 33, customerName: "Oluwaseun Bakare", foodOrdered: "Pounded Yam and Egusi", price: 2800, status: "Delivered", orderTime: "2025-09-12 09:00" },
    { id: 34, customerName: "Ibrahim Nwosu", foodOrdered: "Amala and Ewedu", price: 2200, status: "Preparing", orderTime: "2025-09-12 10:45" },
    { id: 35, customerName: "Ngozi Chukwu", foodOrdered: "Beef Suya", price: 1500, status: "Delivered", orderTime: "2025-09-12 12:30" },
    { id: 36, customerName: "Yusuf Eze", foodOrdered: "Ofada Rice and Sauce", price: 3000, status: "Out for Delivery", orderTime: "2025-09-12 14:15" },
    { id: 37, customerName: "Amina Okafor", foodOrdered: "Eba and Okro Soup", price: 2000, status: "Delivered", orderTime: "2025-09-12 16:00" },
    { id: 38, customerName: "Chinedu Suleiman", foodOrdered: "Plantain and Egg Sauce", price: 1200, status: "Delivered", orderTime: "2025-09-12 17:45" },
    { id: 39, customerName: "Funke Nwankwo", foodOrdered: "Pepper Soup", price: 2500, status: "Cancelled", orderTime: "2025-09-13 08:15" },
    { id: 40, customerName: "Oluwaseun Hassan", foodOrdered: "Yam Porridge", price: 1800, status: "Delivered", orderTime: "2025-09-13 10:00" },
    { id: 41, customerName: "Ibrahim Okechukwu", foodOrdered: "Jollof Rice and Chicken", price: 2500, status: "Preparing", orderTime: "2025-09-13 11:45" },
    { id: 42, customerName: "Ngozi Bello", foodOrdered: "Fried Rice and Chicken", price: 1800, status: "Delivered", orderTime: "2025-09-13 13:30" },
    { id: 43, customerName: "Yusuf Okonkwo", foodOrdered: "Pounded Yam and Egusi", price: 2800, status: "Out for Delivery", orderTime: "2025-09-13 15:15" },
    { id: 44, customerName: "Amina Usman", foodOrdered: "Amala and Ewedu", price: 2200, status: "Delivered", orderTime: "2025-09-13 17:00" },
    { id: 45, customerName: "Chinedu Nwankwo", foodOrdered: "Beef Suya", price: 1500, status: "Delivered", orderTime: "2025-09-13 18:45" },
    { id: 46, customerName: "Funke Adebayo", foodOrdered: "Ofada Rice and Sauce", price: 3000, status: "Cancelled", orderTime: "2025-09-14 09:30" },
    { id: 47, customerName: "Oluwaseun Musa", foodOrdered: "Eba and Okro Soup", price: 2000, status: "Delivered", orderTime: "2025-09-14 11:15" },
    { id: 48, customerName: "Ibrahim Eze", foodOrdered: "Plantain and Egg Sauce", price: 1200, status: "Preparing", orderTime: "2025-09-14 13:00" },
    { id: 49, customerName: "Ngozi Okafor", foodOrdered: "Pepper Soup", price: 2500, status: "Delivered", orderTime: "2025-09-14 14:45" },
    { id: 50, customerName: "Yusuf Suleiman", foodOrdered: "Yam Porridge", price: 1800, status: "Out for Delivery", orderTime: "2025-09-14 16:30" },
    { id: 51, customerName: "Amina Nwankwo", foodOrdered: "Jollof Rice and Chicken", price: 2500, status: "Delivered", orderTime: "2025-09-14 18:15" },
    { id: 52, customerName: "Chinedu Hassan", foodOrdered: "Fried Rice and Chicken", price: 1800, status: "Delivered", orderTime: "2025-09-15 08:00" },
    { id: 53, customerName: "Funke Okechukwu", foodOrdered: "Pounded Yam and Egusi", price: 2800, status: "Cancelled", orderTime: "2025-09-15 09:45" },
    { id: 54, customerName: "Oluwaseun Bello", foodOrdered: "Amala and Ewedu", price: 2200, status: "Delivered", orderTime: "2025-09-15 11:30" },
    { id: 55, customerName: "Ibrahim Okonkwo", foodOrdered: "Beef Suya", price: 1500, status: "Preparing", orderTime: "2025-09-15 13:15" },
    { id: 56, customerName: "Ngozi Usman", foodOrdered: "Ofada Rice and Sauce", price: 3000, status: "Delivered", orderTime: "2025-09-15 15:00" },
    { id: 57, customerName: "Yusuf Adebayo", foodOrdered: "Eba and Okro Soup", price: 2000, status: "Out for Delivery", orderTime: "2025-09-15 16:45" },
    { id: 58, customerName: "Amina Musa", foodOrdered: "Plantain and Egg Sauce", price: 1200, status: "Delivered", orderTime: "2025-09-15 18:30" },
    { id: 59, customerName: "Chinedu Eze", foodOrdered: "Pepper Soup", price: 2500, status: "Delivered", orderTime: "2025-09-15 20:15" },
    { id: 60, customerName: "Funke Okafor", foodOrdered: "Yam Porridge", price: 1800, status: "Delivered", orderTime: "2025-09-15 21:00" },
    { id: 61, customerName: "Oluwaseun Suleiman", foodOrdered: "Jollof Rice and Chicken", price: 2500, status: "Cancelled", orderTime: "2025-09-15 22:30" },
    { id: 62, customerName: "Ibrahim Nwankwo", foodOrdered: "Fried Rice and Chicken", price: 1800, status: "Delivered", orderTime: "2025-09-15 23:15" },
    { id: 63, customerName: "Ngozi Hassan", foodOrdered: "Pounded Yam and Egusi", price: 2800, status: "Preparing", orderTime: "2025-09-15 23:45" },
    { id: 64, customerName: "Yusuf Okechukwu", foodOrdered: "Amala and Ewedu", price: 2200, status: "Delivered", orderTime: "2025-09-15 19:30" },
    { id: 65, customerName: "Amina Bello", foodOrdered: "Beef Suya", price: 1500, status: "Out for Delivery", orderTime: "2025-09-15 17:15" }
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
