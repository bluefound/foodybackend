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
    { id: 25, customerName: "Amina Usman", foodOrdered: "Beef Suya", price: 1500, status: "Delivered", orderTime: "2025-09-10 18:00" }
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
