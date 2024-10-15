## 🟡 Project Status: In Work

# MP: Meal Planner

MP: Meal Planner is a full-stack web application designed to help users plan their weekly meals and reduce food waste. By using this app, users can buy only what is needed for specific meals, keeping grocery expenses in check and avoiding unnecessary purchases.

The application allows users to:
- Register and log in to their accounts
- Add products to a shared database, including brand, price, and quantity information
- Manage a personal virtual fridge by adding products from the shared database
- Create meals using products from the virtual fridge, with approximate meal cost calculations
- Organize these meals into a weekly meal plan
- Generate a shopping list with an estimated total cost based on the weekly plan

## Technologies Used

The application is built using the following technologies:

- **Frontend:**
  - React
  - Redux
  - Material-UI

- **Backend:**
  - Node.js
  - Express.js
  - MongoDB with Mongoose
  - JSON Web Token (JWT) for authentication

## Features

1. **User Authentication:** 
   - Secure user registration and login using JWT.

2. **Shared Product Database:** 
   - Users can contribute to a shared database of products with details such as brand, price, and weight.

3. **Virtual Fridge Management:** 
   - Users can add products from the shared database to their personal virtual fridge.

4. **Meal Creation:** 
   - Build meals using ingredients from the virtual fridge, with automatic price estimation for each meal.

5. **Weekly Meal Planning:** 
   - Organize meals into a weekly schedule.

6. **Shopping List Generation:** 
   - Automatically generate a shopping list based on the weekly meal plan, including an estimated total cost.

## Getting Started

Follow these instructions to set up the project on your local machine.

### Prerequisites

- Node.js
- MongoDB
- npm or yarn

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/mp-meal-planner.git

2. **Navigate to the project directory:**
   ```bash
   cd mp-meal-planner

3. **Install dependencies for both frontend and backend:**
   ```bash
   cd frontend
   npm install
   cd ../backend
   npm install

4. **Configure environment variables:**
   -Create a .env file in the backend directory with necessary configurations (e.g., MongoDB connection string, JWT secret).

5. **Run the application in root folder:**
   ```bash
   npm run dev

## License
This project is proprietary, and all rights are reserved. You may not use, distribute, or modify this code without explicit permission from the author. The source code is available for browsing purposes only.

## Contact
For any inquiries, please contact codeline00@gmail.com.

