import React, { useState } from 'react';

const App = () => {
  const [statusFilter, setStatusFilter] = useState('All');

  // Dummy data with Nigerian names and food orders
  const orders = [
    {
      id: 1,
      customerName: "Adebayo Okechukwu",
      foodOrdered: "Jollof Rice and Chicken",
      price: 2500,
      status: "Pending",
      orderTime: "2025-07-01 09:15"
    },
    {
      id: 2,
      customerName: "Fatima Hassan",
      foodOrdered: "Fried Rice and Chicken",
      price: 1800,
      status: "Delivered",
      orderTime: "2025-07-01 13:45"
    },
    {
      id: 3,
      customerName: "Chukwudi Nwankwo",
      foodOrdered: "Ice Cream",
      price: 1200,
      status: "Cancelled",
      orderTime: "2025-07-01 17:30"
    },
    {
      id: 4,
      customerName: "Aisha Bello",
      foodOrdered: "Parfait Fruit",
      price: 1600,
      status: "Delivered",
      orderTime: "2025-07-02 10:10"
    },
    {
      id: 5,
      customerName: "Emeka Okonkwo",
      foodOrdered: "Plantain and Chicken",
      price: 2200,
      status: "Pending",
      orderTime: "2025-07-02 14:20"
    },
    {
      id: 6,
      customerName: "Hauwa Usman",
      foodOrdered: "Amala and Gbegiri",
      price: 1400,
      status: "Delivered",
      orderTime: "2025-07-02 18:05"
    },
    {
      id: 7,
      customerName: "Kemi Adebayo",
      foodOrdered: "Pepper Soup",
      price: 1300,
      status: "Pending",
      orderTime: "2025-07-03 09:50"
    },
    {
      id: 8,
      customerName: "Yusuf Ibrahim",
      foodOrdered: "Spaghetti",
      price: 1900,
      status: "Delivered",
      orderTime: "2025-07-03 13:30"
    },
    {
      id: 9,
      customerName: "Ngozi Eze",
      foodOrdered: "Jollof Rice and Chicken",
      price: 1700,
      status: "Cancelled",
      orderTime: "2025-07-03 17:10"
    },
    {
      id: 10,
      customerName: "Zainab Abdullahi",
      foodOrdered: "Fried Rice and Chicken",
      price: 1100,
      status: "Delivered",
      orderTime: "2025-07-04 09:40"
    },
    {
      id: 11,
      customerName: "Oluwaseun Adeyemi",
      foodOrdered: "Ice Cream",
      price: 2000,
      status: "Pending",
      orderTime: "2025-07-04 13:20"
    },
    {
      id: 12,
      customerName: "Amina Yusuf",
      foodOrdered: "Plantain and Chicken",
      price: 1500,
      status: "Delivered",
      orderTime: "2025-07-04 17:00"
    },
    {
      id: 13,
      customerName: "Chinedu Okafor",
      foodOrdered: "Amala and Gbegiri",
      price: 1800,
      status: "Pending",
      orderTime: "2025-07-05 10:30"
    },
    {
      id: 14,
      customerName: "Hajara Bala",
      foodOrdered: "Pepper Soup",
      price: 1600,
      status: "Delivered",
      orderTime: "2025-07-05 14:10"
    },
    {
      id: 15,
      customerName: "Tolulope Ogunleye",
      foodOrdered: "Spaghetti",
      price: 1400,
      status: "Cancelled",
      orderTime: "2025-07-05 18:00"
    },
    {
      id: 16,
      customerName: "Rahama Suleiman",
      foodOrdered: "Jollof Rice and Chicken",
      price: 1200,
      status: "Delivered",
      orderTime: "2025-07-06 09:25"
    },
    {
      id: 17,
      customerName: "Ifeanyi Onyeka",
      foodOrdered: "Fried Rice and Chicken",
      price: 2100,
      status: "Pending",
      orderTime: "2025-07-06 13:05"
    },
    {
      id: 18,
      customerName: "Aisha Aliyu",
      foodOrdered: "Ice Cream",
      price: 1300,
      status: "Delivered",
      orderTime: "2025-07-06 16:45"
    },
    {
      id: 19,
      customerName: "Okechukwu Nwosu",
      foodOrdered: "Parfait Fruit",
      price: 1900,
      status: "Pending",
      orderTime: "2025-07-07 10:00"
    },
    {
      id: 20,
      customerName: "Fatima Bello",
      foodOrdered: "Plantain and Chicken",
      price: 1400,
      status: "Delivered",
      orderTime: "2025-07-07 13:40"
    },
    {
      id: 21,
      customerName: "Emeka Uche",
      foodOrdered: "Amala and Gbegiri",
      price: 2300,
      status: "Cancelled",
      orderTime: "2025-07-07 17:20"
    },
    {
      id: 22,
      customerName: "Hauwa Ibrahim",
      foodOrdered: "Pepper Soup",
      price: 1700,
      status: "Delivered",
      orderTime: "2025-07-08 09:35"
    },
    {
      id: 23,
      customerName: "Kemi Oluwaseun",
      foodOrdered: "Spaghetti",
      price: 2000,
      status: "Pending",
      orderTime: "2025-07-08 13:15"
    },
    {
      id: 24,
      customerName: "Yusuf Abdullahi",
      foodOrdered: "Jollof Rice and Chicken",
      price: 1200,
      status: "Delivered",
      orderTime: "2025-07-08 16:55"
    },
    {
      id: 25,
      customerName: "Ngozi Chukwudi",
      foodOrdered: "Fried Rice and Chicken",
      price: 1800,
      status: "Pending",
      orderTime: "2025-07-09 10:20"
    },
    {
      id: 26,
      customerName: "Zainab Usman",
      foodOrdered: "Ice Cream",
      price: 1500,
      status: "Delivered",
      orderTime: "2025-07-09 14:00"
    },
    {
      id: 27,
      customerName: "Oluwaseun Adebayo",
      foodOrdered: "Parfait Fruit",
      price: 2200,
      status: "Cancelled",
      orderTime: "2025-07-09 17:40"
    },
    {
      id: 28,
      customerName: "Amina Hassan",
      foodOrdered: "Plantain and Chicken",
      price: 1300,
      status: "Delivered",
      orderTime: "2025-07-10 09:10"
    },
    {
      id: 29,
      customerName: "Chinedu Okonkwo",
      foodOrdered: "Amala and Gbegiri",
      price: 2400,
      status: "Pending",
      orderTime: "2025-07-10 13:50"
    },
    {
      id: 30,
      customerName: "Hajara Suleiman",
      foodOrdered: "Pepper Soup",
      price: 1600,
      status: "Delivered",
      orderTime: "2025-07-10 17:30"
    },
    {
      id: 31,
      customerName: "Blessing Eze",
      foodOrdered: "Jollof Rice and Chicken",
      price: 2500,
      status: "Delivered",
      orderTime: "2025-07-11 09:25"
    },
    {
      id: 32,
      customerName: "Samuel Adeyemi",
      foodOrdered: "Fried Rice and Chicken",
      price: 2200,
      status: "Pending",
      orderTime: "2025-07-11 13:05"
    },
    {
      id: 33,
      customerName: "Chinonso Okorie",
      foodOrdered: "Ice Cream",
      price: 1200,
      status: "Cancelled",
      orderTime: "2025-07-11 16:45"
    },
    {
      id: 34,
      customerName: "Victoria Udo",
      foodOrdered: "Parfait Fruit",
      price: 1600,
      status: "Delivered",
      orderTime: "2025-07-12 10:00"
    },
    {
      id: 35,
      customerName: "Ibrahim Salami",
      foodOrdered: "Plantain and Chicken",
      price: 2100,
      status: "Pending",
      orderTime: "2025-07-12 13:40"
    },
    {
      id: 36,
      customerName: "Opeyemi Fashola",
      foodOrdered: "Amala and Gbegiri",
      price: 1400,
      status: "Delivered",
      orderTime: "2025-07-12 17:20"
    },
    {
      id: 37,
      customerName: "Chisom Nwachukwu",
      foodOrdered: "Pepper Soup",
      price: 1300,
      status: "Pending",
      orderTime: "2025-07-13 09:35"
    },
    {
      id: 38,
      customerName: "Tunde Bakare",
      foodOrdered: "Spaghetti",
      price: 1900,
      status: "Delivered",
      orderTime: "2025-07-13 13:15"
    },
    {
      id: 39,
      customerName: "Adaobi Nwosu",
      foodOrdered: "Jollof Rice and Chicken",
      price: 1700,
      status: "Cancelled",
      orderTime: "2025-07-13 16:55"
    },
    {
      id: 40,
      customerName: "Gbenga Alabi",
      foodOrdered: "Fried Rice and Chicken",
      price: 1100,
      status: "Delivered",
      orderTime: "2025-07-14 10:20"
    },
    {
      id: 41,
      customerName: "Ngozi Okeke",
      foodOrdered: "Ice Cream",
      price: 2000,
      status: "Pending",
      orderTime: "2025-07-14 14:00"
    },
    {
      id: 42,
      customerName: "Segun Ajayi",
      foodOrdered: "Plantain and Chicken",
      price: 1500,
      status: "Delivered",
      orderTime: "2025-07-14 17:40"
    },
    {
      id: 43,
      customerName: "Chidera Umeh",
      foodOrdered: "Amala and Gbegiri",
      price: 1800,
      status: "Pending",
      orderTime: "2025-07-15 09:10"
    },
    {
      id: 44,
      customerName: "Funke Akinola",
      foodOrdered: "Pepper Soup",
      price: 1600,
      status: "Delivered",
      orderTime: "2025-07-15 13:50"
    },
    {
      id: 45,
      customerName: "Uchechi Obi",
      foodOrdered: "Spaghetti",
      price: 1400,
      status: "Cancelled",
      orderTime: "2025-07-15 17:30"
    },
    {
      id: 46,
      customerName: "Bola Shonubi",
      foodOrdered: "Jollof Rice and Chicken",
      price: 2500,
      status: "Delivered",
      orderTime: "2025-07-21 10:00"
    },
    {
      id: 47,
      customerName: "Chika Okafor",
      foodOrdered: "Fried Rice and Chicken",
      price: 1800,
      status: "Pending",
      orderTime: "2025-07-21 10:45"
    },
    {
      id: 48,
      customerName: "Ireti Adebayo",
      foodOrdered: "Ice Cream",
      price: 1200,
      status: "Cancelled",
      orderTime: "2025-07-21 11:30"
    },
    {
      id: 49,
      customerName: "Gbenga Ojo",
      foodOrdered: "Parfait Fruit",
      price: 1600,
      status: "Delivered",
      orderTime: "2025-07-21 12:15"
    },
    {
      id: 50,
      customerName: "Ngozi Nwosu",
      foodOrdered: "Plantain and Chicken",
      price: 2200,
      status: "Pending",
      orderTime: "2025-07-21 13:00"
    },
    {
      id: 51,
      customerName: "Tosin Ajayi",
      foodOrdered: "Amala and Gbegiri",
      price: 1400,
      status: "Delivered",
      orderTime: "2025-07-21 13:45"
    },
    {
      id: 52,
      customerName: "Chinedu Eze",
      foodOrdered: "Pepper Soup",
      price: 1300,
      status: "Pending",
      orderTime: "2025-07-21 14:30"
    },
    {
      id: 53,
      customerName: "Aisha Lawal",
      foodOrdered: "Spaghetti",
      price: 1900,
      status: "Delivered",
      orderTime: "2025-07-21 15:00"
    },
    {
      id: 54,
      customerName: "Emmanuel Umeh",
      foodOrdered: "Jollof Rice and Chicken",
      price: 1700,
      status: "Cancelled",
      orderTime: "2025-07-21 15:30"
    },
    {
      id: 55,
      customerName: "Yetunde Balogun",
      foodOrdered: "Fried Rice and Chicken",
      price: 1100,
      status: "Delivered",
      orderTime: "2025-07-21 15:45"
    },
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
