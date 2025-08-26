import React, { useState } from 'react';

const App = () => {
  const [statusFilter, setStatusFilter] = useState('All');

  // Updated orders with dates between August 1-22, 2025
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
      customerName: "Oluwaseun Adeleke",
      foodOrdered: "Pounded Yam and Egusi",
      price: 2900,
      status: "Delivered",
      orderTime: "2025-08-21 09:30"
    },
    {
      id: 26,
      customerName: "Adebayo Johnson",
      foodOrdered: "Fried Rice and Chicken",
      price: 2600,
      status: "Delivered",
      orderTime: "2025-08-21 10:45"
    },
    {
      id: 27,
      customerName: "Amina Mohammed",
      foodOrdered: "Jollof Rice and Fish",
      price: 2700,
      status: "Delivered",
      orderTime: "2025-08-21 11:15"
    },
    {
      id: 28,
      customerName: "Ibrahim Suleiman",
      foodOrdered: "Beef Suya",
      price: 1900,
      status: "Delivered",
      orderTime: "2025-08-21 12:30"
    },
    {
      id: 29,
      customerName: "Chidinma Okafor",
      foodOrdered: "Pepper Soup",
      price: 2300,
      status: "Cancelled",
      orderTime: "2025-08-21 13:45"
    },
    {
      id: 30,
      customerName: "Yusuf Bello",
      foodOrdered: "Amala and Ewedu",
      price: 2400,
      status: "Delivered",
      orderTime: "2025-08-21 14:20"
    },
    {
      id: 31,
      customerName: "Ngozi Eze",
      foodOrdered: "Chicken Shawarma",
      price: 2100,
      status: "Delivered",
      orderTime: "2025-08-21 15:35"
    },
    {
      id: 32,
      customerName: "Mohammed Ibrahim",
      foodOrdered: "Beef Stew and Rice",
      price: 2600,
      status: "Pending",
      orderTime: "2025-08-21 16:50"
    },
    {
      id: 33,
      customerName: "Aisha Bello",
      foodOrdered: "Chicken and Chips",
      price: 2400,
      status: "Delivered",
      orderTime: "2025-08-21 17:30"
    },
    {
      id: 34,
      customerName: "Chukwudi Nwankwo",
      foodOrdered: "Beans and Plantain",
      price: 1800,
      status: "Delivered",
      orderTime: "2025-08-21 18:15"
    },
    {
      id: 35,
      customerName: "Fatima Hassan",
      foodOrdered: "Fried Rice and Beef",
      price: 2700,
      status: "Delivered",
      orderTime: "2025-08-22 09:20"
    },
    {
      id: 36,
      customerName: "Emeka Okonkwo",
      foodOrdered: "Banga Soup and Starch",
      price: 2900,
      status: "Cancelled",
      orderTime: "2025-08-22 10:35"
    },
    {
      id: 37,
      customerName: "Hauwa Usman",
      foodOrdered: "Fish Roll",
      price: 1500,
      status: "Delivered",
      orderTime: "2025-08-22 11:50"
    },
    {
      id: 38,
      customerName: "Oluwaseyi Johnson",
      foodOrdered: "Pounded Yam and Vegetable",
      price: 2500,
      status: "Pending",
      orderTime: "2025-08-22 12:15"
    },
    {
      id: 39,
      customerName: "Ibrahim Suleiman",
      foodOrdered: "Fried Rice and Chicken",
      price: 2600,
      status: "Delivered",
      orderTime: "2025-08-22 13:30"
    },
    {
      id: 40,
      customerName: "Chioma Okafor",
      foodOrdered: "Jollof Rice and Fish",
      price: 2800,
      status: "Delivered",
      orderTime: "2025-08-22 14:45"
    },
    {
      id: 41,
      customerName: "Yusuf Bello",
      foodOrdered: "Beef Suya",
      price: 2000,
      status: "Delivered",
      orderTime: "2025-08-22 15:20"
    },
    {
      id: 42,
      customerName: "Nneka Eze",
      foodOrdered: "Pepper Soup",
      price: 2200,
      status: "Cancelled",
      orderTime: "2025-08-22 16:35"
    },
    {
      id: 43,
      customerName: "Mohammed Abubakar",
      foodOrdered: "Fried Rice and Chicken",
      price: 2600,
      status: "Delivered",
      orderTime: "2025-08-22 17:50"
    },
    {
      id: 44,
      customerName: "Amina Ibrahim",
      foodOrdered: "Jollof Rice and Beef",
      price: 2400,
      status: "Pending",
      orderTime: "2025-08-22 18:30"
    },
    {
      id: 25,
      customerName: "Emeka Nwosu",
      foodOrdered: "Ofada Rice and Sauce",
      price: 3000,
      status: "Delivered",
      orderTime: "2025-08-08 12:15"
    },
    // New orders for August 11, 2025
    {
      id: 26,
      customerName: "Amina Yusuf",
      foodOrdered: "Jollof Rice and Grilled Fish",
      price: 3200,
      status: "Delivered",
      orderTime: "2025-08-11 09:30"
    },
    {
      id: 27,
      customerName: "Obinna Eze",
      foodOrdered: "Pounded Yam and Ogbono",
      price: 2800,
      status: "Delivered",
      orderTime: "2025-08-11 10:15"
    },
    {
      id: 28,
      customerName: "Zainab Abdullahi",
      foodOrdered: "Fried Rice and Dodo",
      price: 2500,
      status: "Delivered",
      orderTime: "2025-08-11 10:45"
    },
    {
      id: 29,
      customerName: "Chinedu Okafor",
      foodOrdered: "Banga and Starch",
      price: 2700,
      status: "Delivered",
      orderTime: "2025-08-11 11:20"
    },
    {
      id: 30,
      customerName: "Aisha Mohammed",
      foodOrdered: "White Rice and Stew",
      price: 2000,
      status: "Delivered",
      orderTime: "2025-08-11 11:50"
    },
    {
      id: 31,
      customerName: "Ibrahim Suleiman",
      foodOrdered: "Beef Suya",
      price: 1800,
      status: "Delivered",
      orderTime: "2025-08-11 12:30"
    },
    {
      id: 32,
      customerName: "Ngozi Okonkwo",
      foodOrdered: "Abacha and Ugba",
      price: 2200,
      status: "Delivered",
      orderTime: "2025-08-11 13:15"
    },
    {
      id: 33,
      customerName: "Yusuf Bello",
      foodOrdered: "Moi Moi and Pap",
      price: 1900,
      status: "Cancelled",
      orderTime: "2025-08-11 13:45"
    },
    {
      id: 34,
      customerName: "Chiamaka Nwachukwu",
      foodOrdered: "Nkwobi and Isi Ewu",
      price: 3500,
      status: "Delivered",
      orderTime: "2025-08-11 14:20"
    },
    {
      id: 35,
      customerName: "Mohammed Kabir",
      foodOrdered: "Tuwo Shinkafa and Miyan Kuka",
      price: 2600,
      status: "Delivered",
      orderTime: "2025-08-11 15:00"
    },
    {
      id: 36,
      customerName: "Adebisi Adeleke",
      foodOrdered: "Ewa Agoyin and Bread",
      price: 1800,
      status: "Delivered",
      orderTime: "2025-08-11 15:30"
    },
    {
      id: 37,
      customerName: "Emmanuel Okafor",
      foodOrdered: "Pepper Soup and Fufu",
      price: 2900,
      status: "Delivered",
      orderTime: "2025-08-11 16:15"
    },
    {
      id: 38,
      customerName: "Halima Ibrahim",
      foodOrdered: "Amala and Ewedu",
      price: 2300,
      status: "Delivered",
      orderTime: "2025-08-11 16:45"
    },
    {
      id: 39,
      customerName: "Oluwaseun Adebayo",
      foodOrdered: "Fried Plantain and Egg",
      price: 2000,
      status: "Delivered",
      orderTime: "2025-08-11 17:20"
    },
    {
      id: 40,
      customerName: "Musa Bello",
      foodOrdered: "Suya and Dodo",
      price: 2400,
      status: "Pending",
      orderTime: "2025-08-11 17:50"
    },
    {
      id: 41,
      customerName: "Amina Suleiman",
      foodOrdered: "Pounded Yam and Egusi",
      price: 2800,
      status: "Delivered",
      orderTime: "2025-08-11 18:15"
    },
    {
      id: 42,
      customerName: "Chukwudi Nwankwo",
      foodOrdered: "Jollof Rice and Chicken",
      price: 3000,
      status: "Delivered",
      orderTime: "2025-08-11 18:45"
    },
    {
      id: 43,
      customerName: "Fatima Hassan",
      foodOrdered: "Fried Rice and Chicken",
      price: 2800,
      status: "Delivered",
      orderTime: "2025-08-11 19:20"
    },
    {
      id: 44,
      customerName: "Oluwatosin Adebayo",
      foodOrdered: "Eba and Okro",
      price: 2200,
      status: "Delivered",
      orderTime: "2025-08-11 19:50"
    },
    {
      id: 45,
      customerName: "Ibrahim Musa",
      foodOrdered: "Beef Suya",
      price: 2500,
      status: "Delivered",
      orderTime: "2025-08-11 20:15"
    },
    // New orders for August 12, 2025
    {
      id: 46,
      customerName: "Adebayo Johnson",
      foodOrdered: "Jollof Rice and Grilled Chicken",
      price: 3200,
      status: "Delivered",
      orderTime: "2025-08-12 08:30"
    },
    {
      id: 47,
      customerName: "Amina Mohammed",
      foodOrdered: "Fried Rice and Plantain",
      price: 2800,
      status: "Delivered",
      orderTime: "2025-08-12 09:15"
    },
    {
      id: 48,
      customerName: "Chinedu Okafor",
      foodOrdered: "Pounded Yam and Egusi",
      price: 2900,
      status: "Delivered",
      orderTime: "2025-08-12 10:00"
    },
    {
      id: 49,
      customerName: "Fatima Yusuf",
      foodOrdered: "Amala and Ewedu",
      price: 2500,
      status: "Delivered",
      orderTime: "2025-08-12 10:45"
    },
    {
      id: 50,
      customerName: "Ibrahim Musa",
      foodOrdered: "Suya and Dodo",
      price: 2200,
      status: "Delivered",
      orderTime: "2025-08-12 11:30"
    },
    {
      id: 51,
      customerName: "Ngozi Eze",
      foodOrdered: "Banga and Starch",
      price: 2700,
      status: "Delivered",
      orderTime: "2025-08-12 12:15"
    },
    {
      id: 52,
      customerName: "Oluwaseun Adebayo",
      foodOrdered: "Eba and Okro",
      price: 2300,
      status: "Delivered",
      orderTime: "2025-08-12 13:00"
    },
    {
      id: 53,
      customerName: "Yusuf Bello",
      foodOrdered: "White Rice and Stew",
      price: 2100,
      status: "Delivered",
      orderTime: "2025-08-12 13:45"
    },
    {
      id: 54,
      customerName: "Chiamaka Nwosu",
      foodOrdered: "Pepper Soup and Fufu",
      price: 3000,
      status: "Delivered",
      orderTime: "2025-08-12 14:30"
    },
    {
      id: 55,
      customerName: "Mohammed Kabir",
      foodOrdered: "Tuwo Shinkafa and Miyan Kuka",
      price: 2600,
      status: "Delivered",
      orderTime: "2025-08-12 15:15"
    },
    {
      id: 56,
      customerName: "Aisha Ibrahim",
      foodOrdered: "Ewa Agoyin and Bread",
      price: 1900,
      status: "Delivered",
      orderTime: "2025-08-12 16:00"
    },
    {
      id: 57,
      customerName: "Emeka Okonkwo",
      foodOrdered: "Nkwobi and Isi Ewu",
      price: 3500,
      status: "Delivered",
      orderTime: "2025-08-12 16:45"
    },
    {
      id: 58,
      customerName: "Zainab Abdullahi",
      foodOrdered: "Abacha and Ugba",
      price: 2200,
      status: "Delivered",
      orderTime: "2025-08-12 17:30"
    },
    {
      id: 59,
      customerName: "Obinna Eze",
      foodOrdered: "Ofada Rice and Sauce",
      price: 3100,
      status: "Delivered",
      orderTime: "2025-08-12 18:15"
    },
    {
      id: 60,
      customerName: "Halima Suleiman",
      foodOrdered: "Fried Plantain and Egg",
      price: 2000,
      status: "Pending",
      orderTime: "2025-08-12 19:00"
    },
    // New orders for August 14-15, 2025
    {
      id: 61,
      customerName: "Adeola Adebayo",
      foodOrdered: "Jollof Rice and Grilled Tilapia",
      price: 3400,
      status: "Delivered",
      orderTime: "2025-08-14 09:15"
    },
    {
      id: 62,
      customerName: "Ibrahim Suleiman",
      foodOrdered: "Pounded Yam and Oha Soup",
      price: 3100,
      status: "Delivered",
      orderTime: "2025-08-14 10:30"
    },
    {
      id: 63,
      customerName: "Chinwe Okonkwo",
      foodOrdered: "Fried Rice and Chicken",
      price: 2800,
      status: "Delivered",
      orderTime: "2025-08-14 11:45"
    },
    {
      id: 64,
      customerName: "Yusuf Bello",
      foodOrdered: "Amala and Ewedu",
      price: 2600,
      status: "Cancelled",
      orderTime: "2025-08-14 12:20"
    },
    {
      id: 65,
      customerName: "Amina Ibrahim",
      foodOrdered: "Beef Suya",
      price: 2200,
      status: "Delivered",
      orderTime: "2025-08-14 13:30"
    },
    {
      id: 66,
      customerName: "Oluwaseun Adebayo",
      foodOrdered: "Eba and Okro",
      price: 2400,
      status: "Pending",
      orderTime: "2025-08-14 14:45"
    },
    {
      id: 67,
      customerName: "Mohammed Kabir",
      foodOrdered: "Tuwo Shinkafa and Miyan Kuka",
      price: 2700,
      status: "Delivered",
      orderTime: "2025-08-14 15:30"
    },
    {
      id: 68,
      customerName: "Ngozi Eze",
      foodOrdered: "Pepper Soup and Fufu",
      price: 3000,
      status: "Delivered",
      orderTime: "2025-08-14 16:15"
    },
    {
      id: 69,
      customerName: "Chinedu Okafor",
      foodOrdered: "Banga and Starch",
      price: 2900,
      status: "Delivered",
      orderTime: "2025-08-14 17:00"
    },
    {
      id: 70,
      customerName: "Aisha Mohammed",
      foodOrdered: "White Rice and Stew",
      price: 2100,
      status: "Delivered",
      orderTime: "2025-08-14 17:45"
    },
    {
      id: 71,
      customerName: "Obinna Nwachukwu",
      foodOrdered: "Jollof Rice and Chicken",
      price: 3000,
      status: "Delivered",
      orderTime: "2025-08-15 09:30"
    },
    {
      id: 72,
      customerName: "Fatima Hassan",
      foodOrdered: "Fried Rice and Plantain",
      price: 2700,
      status: "Delivered",
      orderTime: "2025-08-15 10:45"
    },
    {
      id: 73,
      customerName: "Emeka Okonkwo",
      foodOrdered: "Pounded Yam and Egusi",
      price: 3100,
      status: "Delivered",
      orderTime: "2025-08-15 11:30"
    },
    {
      id: 74,
      customerName: "Zainab Abdullahi",
      foodOrdered: "Ofada Rice and Sauce",
      price: 3200,
      status: "Delivered",
      orderTime: "2025-08-15 12:15"
    },
    {
      id: 75,
      customerName: "Chukwudi Nwankwo",
      foodOrdered: "Nkwobi and Isi Ewu",
      price: 3600,
      status: "Delivered",
      orderTime: "2025-08-15 13:00"
    },
    {
      id: 76,
      customerName: "Adebisi Adeleke",
      foodOrdered: "Ewa Agoyin and Bread",
      price: 1900,
      status: "Cancelled",
      orderTime: "2025-08-15 13:45"
    },
    {
      id: 77,
      customerName: "Ibrahim Musa",
      foodOrdered: "Suya and Dodo",
      price: 2300,
      status: "Delivered",
      orderTime: "2025-08-15 14:30"
    },
    {
      id: 78,
      customerName: "Nneka Eze",
      foodOrdered: "Abacha and Ugba",
      price: 2400,
      status: "Delivered",
      orderTime: "2025-08-15 15:15"
    },
    {
      id: 79,
      customerName: "Musa Bello",
      foodOrdered: "Fried Plantain and Egg",
      price: 2100,
      status: "Pending",
      orderTime: "2025-08-15 16:00"
    },
    {
      id: 80,
      customerName: "Amina Suleiman",
      foodOrdered: "Moi Moi and Pap",
      price: 2000,
      status: "Delivered",
      orderTime: "2025-08-15 16:45"
    },
    // New orders for August 18, 2025
    {
      id: 81,
      customerName: "Chidi Okeke",
      foodOrdered: "Jollof Rice and Chicken",
      price: 2600,
      status: "Delivered",
      orderTime: "2025-08-18 09:00"
    },
    {
      id: 82,
      customerName: "Fatima Aliyu",
      foodOrdered: "Fried Rice and Beef",
      price: 2800,
      status: "Delivered",
      orderTime: "2025-08-18 09:45"
    },
    {
      id: 83,
      customerName: "Emeka Nwankwo",
      foodOrdered: "Pounded Yam and Egusi Soup",
      price: 3000,
      status: "Pending",
      orderTime: "2025-08-18 10:30"
    },
    {
      id: 84,
      customerName: "Aisha Bello",
      foodOrdered: "Amala and Ewedu Soup",
      price: 2400,
      status: "Delivered",
      orderTime: "2025-08-18 11:15"
    },
    {
      id: 85,
      customerName: "Oluwaseun Adeboye",
      foodOrdered: "Eba and Okro Soup",
      price: 2200,
      status: "Delivered",
      orderTime: "2025-08-18 12:00"
    },
    {
      id: 86,
      customerName: "Ngozi Okafor",
      foodOrdered: "Banga Soup and Starch",
      price: 2900,
      status: "Delivered",
      orderTime: "2025-08-18 12:45"
    },
    {
      id: 87,
      customerName: "Ibrahim Musa",
      foodOrdered: "Beef Suya",
      price: 1800,
      status: "Cancelled",
      orderTime: "2025-08-18 13:30"
    },
    {
      id: 88,
      customerName: "Zainab Ibrahim",
      foodOrdered: "Chicken Shawarma",
      price: 2000,
      status: "Delivered",
      orderTime: "2025-08-18 14:15"
    },
    {
      id: 89,
      customerName: "Chinedu Okoro",
      foodOrdered: "White Rice and Stew",
      price: 2300,
      status: "Delivered",
      orderTime: "2025-08-18 15:00"
    },
    {
      id: 90,
      customerName: "Halima Abubakar",
      foodOrdered: "Fried Plantain and Egg Sauce",
      price: 1900,
      status: "Pending",
      orderTime: "2025-08-18 15:45"
    },
    {
      id: 91,
      customerName: "Adekunle Johnson",
      foodOrdered: "Ofada Rice and Ayamase Stew",
      price: 3200,
      status: "Delivered",
      orderTime: "2025-08-18 16:30"
    },
    {
      id: 92,
      customerName: "Chioma Adewale",
      foodOrdered: "Pepper Soup with Goat Meat",
      price: 2700,
      status: "Delivered",
      orderTime: "2025-08-18 17:15"
    },
    {
      id: 93,
      customerName: "Yusuf Mohammed",
      foodOrdered: "Tuwo Shinkafa and Miyan Kuka",
      price: 2500,
      status: "Delivered",
      orderTime: "2025-08-18 18:00"
    },
    {
      id: 94,
      customerName: "Funmilayo Adeyemi",
      foodOrdered: "Ewa Aganyin and Bread",
      price: 1700,
      status: "Cancelled",
      orderTime: "2025-08-18 18:45"
    },
    {
      id: 95,
      customerName: "Musa Bello",
      foodOrdered: "Nkwobi",
      price: 3500,
      status: "Delivered",
      orderTime: "2025-08-18 19:30"
    },
    {
      id: 96,
      customerName: "Amina Usman",
      foodOrdered: "Abacha and Ugba",
      price: 2100,
      status: "Delivered",
      orderTime: "2025-08-18 20:15"
    },
    {
      id: 97,
      customerName: "Obinna Eze",
      foodOrdered: "Isi Ewu",
      price: 3800,
      status: "Delivered",
      orderTime: "2025-08-18 21:00"
    },
    {
      id: 98,
      customerName: "Khadija Hassan",
      foodOrdered: "Moi Moi and Pap",
      price: 1600,
      status: "Delivered",
      orderTime: "2025-08-18 21:45"
    },
    {
      id: 99,
      customerName: "Tunde Bakare",
      foodOrdered: "Asun (Spicy Smoked Goat Meat)",
      price: 3300,
      status: "Pending",
      orderTime: "2025-08-18 22:30"
    },
    {
      id: 100,
      customerName: "Blessing Adekunle",
      foodOrdered: "Gizdodo (Gizzard and Plantain)",
      price: 2900,
      status: "Delivered",
      orderTime: "2025-08-18 23:15"
    },
    {
      id: 101,
      customerName: "Obinna Nwankwo",
      foodOrdered: "Bitterleaf Soup and Fufu",
      price: 2900,
      status: "Delivered",
      orderTime: "2025-08-09 11:30"
    },
    {
      id: 102,
      customerName: "Aisha Musa",
      foodOrdered: "Chicken and Chips",
      price: 2300,
      status: "Pending",
      orderTime: "2025-08-09 14:45"
    },
    {
      id: 103,
      customerName: "Emeka Okafor",
      foodOrdered: "Jollof Rice and Fish",
      price: 2700,
      status: "Delivered",
      orderTime: "2025-08-10 10:15"
    },
    {
      id: 104,
      customerName: "Aminat Yusuf",
      foodOrdered: "Pounded Yam and Egusi",
      price: 2600,
      status: "Cancelled",
      orderTime: "2025-08-11 12:30"
    },
    {
      id: 105,
      customerName: "Ibrahim Abdullahi",
      foodOrdered: "Beef Suya",
      price: 1800,
      status: "Delivered",
      orderTime: "2025-08-12 16:45"
    },
    {
      id: 106,
      customerName: "Chinwe Okeke",
      foodOrdered: "Fried Rice and Plantain",
      price: 2200,
      status: "Delivered",
      orderTime: "2025-08-13 13:15"
    },
    {
      id: 107,
      customerName: "Mohammed Bello",
      foodOrdered: "Pepper Soup",
      price: 2100,
      status: "Pending",
      orderTime: "2025-08-14 17:30"
    },
    {
      id: 108,
      customerName: "Ngozi Eze",
      foodOrdered: "Amala and Ewedu",
      price: 2400,
      status: "Delivered",
      orderTime: "2025-08-15 11:45"
    },
    {
      id: 109,
      customerName: "Yusuf Mohammed",
      foodOrdered: "Jollof Rice and Chicken",
      price: 2500,
      status: "Delivered",
      orderTime: "2025-08-16 14:00"
    },
    {
      id: 110,
      customerName: "Amina Ibrahim",
      foodOrdered: "Beans and Plantain",
      price: 1900,
      status: "Cancelled",
      orderTime: "2025-08-17 15:30"
    },
    {
      id: 111,
      customerName: "Chinedu Okafor",
      foodOrdered: "Chicken Shawarma",
      price: 2000,
      status: "Delivered",
      orderTime: "2025-08-18 12:15"
    },
    {
      id: 112,
      customerName: "Fatima Abubakar",
      foodOrdered: "Fried Rice and Beef",
      price: 2600,
      status: "Pending",
      orderTime: "2025-08-20 18:00"
    },
    {
      id: 113,
      customerName: "Adebayo Johnson",
      foodOrdered: "Jollof Rice and Fish",
      price: 2800,
      status: "Delivered",
      orderTime: "2025-08-25 09:15"
    },
    {
      id: 114,
      customerName: "Chinelo Nwosu",
      foodOrdered: "Pounded Yam and Egusi",
      price: 2700,
      status: "Delivered",
      orderTime: "2025-08-25 10:30"
    },
    {
      id: 115,
      customerName: "Ibrahim Suleiman",
      foodOrdered: "Beef Suya",
      price: 1800,
      status: "Delivered",
      orderTime: "2025-08-25 11:45"
    },
    {
      id: 116,
      customerName: "Amina Yusuf",
      foodOrdered: "Chicken Shawarma",
      price: 2000,
      status: "Cancelled",
      orderTime: "2025-08-25 12:15"
    },
    {
      id: 117,
      customerName: "Emeka Okafor",
      foodOrdered: "Fried Rice and Plantain",
      price: 2200,
      status: "Delivered",
      orderTime: "2025-08-25 12:45"
    },
    {
      id: 118,
      customerName: "Hassan Bello",
      foodOrdered: "Pepper Soup",
      price: 2100,
      status: "Delivered",
      orderTime: "2025-08-25 13:30"
    },
    {
      id: 119,
      customerName: "Ngozi Eze",
      foodOrdered: "Amala and Ewedu",
      price: 2400,
      status: "Pending",
      orderTime: "2025-08-25 14:15"
    },
    {
      id: 120,
      customerName: "Yusuf Mohammed",
      foodOrdered: "Jollof Rice and Chicken",
      price: 2500,
      status: "Delivered",
      orderTime: "2025-08-25 15:00"
    },
    {
      id: 121,
      customerName: "Aisha Ibrahim",
      foodOrdered: "Beans and Plantain",
      price: 1900,
      status: "Delivered",
      orderTime: "2025-08-25 15:30"
    },
    {
      id: 122,
      customerName: "Chinedu Nwachukwu",
      foodOrdered: "Chicken Shawarma",
      price: 2000,
      status: "Delivered",
      orderTime: "2025-08-25 16:15"
    },
    {
      id: 123,
      customerName: "Fatima Abubakar",
      foodOrdered: "Fried Rice and Beef",
      price: 2600,
      status: "Delivered",
      orderTime: "2025-08-25 16:45"
    },
    {
      id: 124,
      customerName: "Oluwaseun Adebayo",
      foodOrdered: "Eba and Okro",
      price: 2100,
      status: "Cancelled",
      orderTime: "2025-08-25 17:15"
    },
    {
      id: 125,
      customerName: "Musa Ibrahim",
      foodOrdered: "Fried Plantain and Egg",
      price: 1700,
      status: "Delivered",
      orderTime: "2025-08-25 17:45"
    },
    {
      id: 126,
      customerName: "Ngozi Eze",
      foodOrdered: "Pepper Soup",
      price: 2100,
      status: "Delivered",
      orderTime: "2025-08-25 18:15"
    },
    {
      id: 127,
      customerName: "Yusuf Bello",
      foodOrdered: "Moi Moi",
      price: 1200,
      status: "Delivered",
      orderTime: "2025-08-25 18:45"
    },
    {
      id: 128,
      customerName: "Chidinma Okafor",
      foodOrdered: "Nkwobi",
      price: 2300,
      status: "Pending",
      orderTime: "2025-08-25 19:15"
    },
    {
      id: 129,
      customerName: "Mohammed Ibrahim",
      foodOrdered: "Beef Stew and Rice",
      price: 2600,
      status: "Delivered",
      orderTime: "2025-08-25 19:45"
    },
    {
      id: 130,
      customerName: "Amina Yusuf",
      foodOrdered: "Jollof Rice and Fish",
      price: 2800,
      status: "Delivered",
      orderTime: "2025-08-25 20:15"
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
