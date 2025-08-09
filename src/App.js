import React, { useState } from 'react';

const App = () => {
  const [statusFilter, setStatusFilter] = useState('All');

  // Updated orders with dates between August 1-8, 2025
  const orders = [
    {
      id: 1,
      customerName: "Adebayo Okechukwu",
      foodOrdered: "Jollof Rice and Chicken",
      price: 2500,
      status: "Delivered",
      orderTime: "2025-08-01 09:15"
    },
    {
      id: 2,
      customerName: "Fatima Hassan",
      foodOrdered: "Fried Rice and Chicken",
      price: 1800,
      status: "Delivered",
      orderTime: "2025-08-01 11:30"
    },
    {
      id: 3,
      customerName: "Chukwudi Nwankwo",
      foodOrdered: "Pounded Yam and Egusi",
      price: 2800,
      status: "Delivered",
      orderTime: "2025-08-01 13:45"
    },
    {
      id: 4,
      customerName: "Aisha Bello",
      foodOrdered: "Amala and Ewedu",
      price: 2200,
      status: "Cancelled",
      orderTime: "2025-08-01 14:20"
    },
    {
      id: 5,
      customerName: "Emeka Okonkwo",
      foodOrdered: "Beef Suya",
      price: 1500,
      status: "Delivered",
      orderTime: "2025-08-01 16:30"
    },
    {
      id: 6,
      customerName: "Hauwa Usman",
      foodOrdered: "Chicken Shawarma",
      price: 2000,
      status: "Pending",
      orderTime: "2025-08-01 17:45"
    },
    {
      id: 7,
      customerName: "Oluwaseun Adebayo",
      foodOrdered: "Eba and Okro",
      price: 1900,
      status: "Delivered",
      orderTime: "2025-08-02 10:15"
    },
    {
      id: 8,
      customerName: "Ibrahim Musa",
      foodOrdered: "Fried Plantain and Egg",
      price: 1700,
      status: "Delivered",
      orderTime: "2025-08-02 12:30"
    },
    {
      id: 9,
      customerName: "Ngozi Eze",
      foodOrdered: "Pepper Soup",
      price: 2100,
      status: "Delivered",
      orderTime: "2025-08-02 14:45"
    },
    {
      id: 10,
      customerName: "Yusuf Bello",
      foodOrdered: "Moi Moi",
      price: 1200,
      status: "Cancelled",
      orderTime: "2025-08-03 09:30"
    },
    {
      id: 11,
      customerName: "Chidinma Okafor",
      foodOrdered: "Nkwobi",
      price: 2300,
      status: "Delivered",
      orderTime: "2025-08-03 11:45"
    },
    {
      id: 12,
      customerName: "Mohammed Ibrahim",
      foodOrdered: "Beef Stew and Rice",
      price: 2600,
      status: "Pending",
      orderTime: "2025-08-03 13:15"
    },
    {
      id: 13,
      customerName: "Amina Yusuf",
      foodOrdered: "Chicken and Chips",
      price: 2400,
      status: "Delivered",
      orderTime: "2025-08-03 15:30"
    },
    {
      id: 14,
      customerName: "Obinna Nwachukwu",
      foodOrdered: "Beans and Plantain",
      price: 1800,
      status: "Delivered",
      orderTime: "2025-08-04 10:00"
    },
    {
      id: 15,
      customerName: "Halima Abubakar",
      foodOrdered: "Fried Rice and Beef",
      price: 2700,
      status: "Delivered",
      orderTime: "2025-08-04 12:15"
    },
    {
      id: 16,
      customerName: "Chinedu Okafor",
      foodOrdered: "Banga Soup and Starch",
      price: 2900,
      status: "Cancelled",
      orderTime: "2025-08-04 14:30"
    },
    {
      id: 17,
      customerName: "Aisha Mohammed",
      foodOrdered: "Fish Roll",
      price: 1500,
      status: "Delivered",
      orderTime: "2025-08-05 11:00"
    },
    {
      id: 18,
      customerName: "Oluwaseyi Johnson",
      foodOrdered: "Pounded Yam and Vegetable",
      price: 2500,
      status: "Pending",
      orderTime: "2025-08-05 13:30"
    },
    {
      id: 19,
      customerName: "Ibrahim Suleiman",
      foodOrdered: "Fried Rice and Chicken",
      price: 2600,
      status: "Delivered",
      orderTime: "2025-08-05 15:45"
    },
    {
      id: 20,
      customerName: "Chioma Okafor",
      foodOrdered: "Jollof Rice and Fish",
      price: 2800,
      status: "Delivered",
      orderTime: "2025-08-06 10:30"
    },
    {
      id: 21,
      customerName: "Yusuf Bello",
      foodOrdered: "Beef Suya",
      price: 2000,
      status: "Delivered",
      orderTime: "2025-08-06 12:45"
    },
    {
      id: 22,
      customerName: "Nneka Eze",
      foodOrdered: "Pepper Soup",
      price: 2200,
      status: "Cancelled",
      orderTime: "2025-08-07 11:15"
    },
    {
      id: 23,
      customerName: "Mohammed Abubakar",
      foodOrdered: "Fried Rice and Chicken",
      price: 2600,
      status: "Delivered",
      orderTime: "2025-08-07 14:30"
    },
    {
      id: 24,
      customerName: "Amina Ibrahim",
      foodOrdered: "Jollof Rice and Beef",
      price: 2400,
      status: "Pending",
      orderTime: "2025-08-08 10:00"
    },
    {
      id: 25,
      customerName: "Emeka Nwosu",
      foodOrdered: "Ofada Rice and Sauce",
      price: 3000,
      status: "Delivered",
      orderTime: "2025-08-08 12:15"
    }
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
