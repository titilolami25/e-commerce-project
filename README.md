# E-Commerce Project

A simple React + TypeScript e-commerce web app where users can browse products, add items to a cart, and place orders.

## Features
- Product listing with images, prices, and descriptions
- Product details page
- Shopping cart with add, remove, update, and **clear cart** functionality
- Checkout form for shipping information
- Order confirmation screen
- Context API for global cart state
- TypeScript for type safety
- Responsive UI

## Project Structure
src/
├── api/
│ └── products.ts # Mock product data
├── components/ # UI components (ProductCard, Sidebar, etc.)
├── context/
│ └── CartContext.tsx # Cart state management
├── pages/
│ ├── Home.tsx
│ ├── ProductList.tsx
│ ├── ProductDetails.tsx
│ ├── Cart.tsx
│ └── Checkout.tsx
├── App.tsx
└── main.tsx
## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) >= 16
- npm or yarn

### Installation
```bash
git clone https://github.com/titilolami25/e-commerce-project.git
cd e-commerce-project
npm install
npm run dev

Open your browser at http://localhost:5173.

Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you’d like to change.

License

MIT



