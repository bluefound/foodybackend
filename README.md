# Foody - Order Monitoring Dashboard

A professional order monitoring dashboard for an online food ordering app built with React and TailwindCSS.

## Features

- **Clean Table Layout**: Displays orders in a professional table format
- **Status Filtering**: Filter orders by status (All, Pending, Delivered, Cancelled)
- **Responsive Design**: Works perfectly on desktop and mobile devices
- **Nigerian Context**: Includes authentic Nigerian names and local food items
- **Professional UI**: Clean, minimal design perfect for investor demos

## Order Information Displayed

- Customer Name
- Food Ordered
- Price (in ₦ Naira)
- Order Status
- Order Time

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone or download this project
2. Navigate to the project directory
3. Install dependencies:

```bash
npm install
```

### Running the Application

Start the development server:

```bash
npm start
```

The application will open in your browser at `http://localhost:3000`

### Building for Production

To create a production build:

```bash
npm run build
```

## Deployment

This project is ready for deployment on Vercel:

1. Push your code to a GitHub repository
2. Connect your repository to Vercel
3. Deploy with the default settings

## Technology Stack

- **React 18**: Modern React with hooks
- **TailwindCSS**: Utility-first CSS framework
- **JavaScript**: ES6+ features
- **Responsive Design**: Mobile-first approach

## Project Structure

```
src/
├── App.js          # Main dashboard component
├── index.js        # React entry point
└── index.css       # TailwindCSS imports

public/
└── index.html      # HTML template
```

## Data

The dashboard includes 30 dummy orders with:
- Authentic Nigerian names
- Popular Nigerian food items
- Realistic pricing in Naira (₦)
- Various order statuses and timestamps

## Customization

The dashboard is easily customizable:
- Modify the `orders` array in `App.js` to add/remove orders
- Update status colors in the `getStatusColor` function
- Adjust styling using TailwindCSS classes
- Add new filter options as needed

## License

This project is open source and available under the MIT License. 