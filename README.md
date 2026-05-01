# Food-Eat - Food Ordering Platform

A complete food ordering and restaurant management system built with modern web technologies. Customers can browse menus, place orders, and manage their accounts while restaurant managers control menu items and process orders.

## Features

- **User Authentication**: Secure user login and registration with JWT tokens
- **Menu Management**: Browse restaurant menus with detailed item information
- **Order Processing**: Place, track, and manage food orders
- **User Dashboard**: Personal order history and profile management
- **Admin Controls**: Menu item CRUD operations and order management
- **Real-time Updates**: Order status tracking

## Tech Stack

### Backend
- **Framework**: Express.js 4.19.2
- **Database**: Prisma ORM 5.17.0
- **Authentication**: JWT (jsonwebtoken 9.0.2), bcrypt 5.1.1
- **Middleware**: CORS, cookie-parser
- **Environment**: dotenv for configuration

### Frontend
- **Framework**: React 18.2.0
- **Build Tool**: Vite 5.2.0
- **Routing**: React Router DOM 6.25.0
- **Form Management**: Formik 2.4.6 with Yup validation
- **HTTP Client**: Axios 1.7.2
- **State Management**: Zustand 4.5.4
- **UI Icons**: React Icons 5.2.1
- **Notifications**: React Toastify 10.0.5

## Project Structure

```
Food-eat/
├── client/
│   ├── src/
│   ├── package.json
│   └── vite.config.js
├── server/
│   ├── src/
│   │   ├── index.js
│   │   ├── Routes/
│   │   │   ├── users.routers.js
│   │   │   ├── menu.routers.js
│   │   │   └── orders.router.js
│   │   └── controllers/
│   ├── package.json
│   └── .env
```

## Getting Started

### Backend Setup
```bash
cd server
npm install
npm run dev
# Server runs on http://localhost:3000
```

### Frontend Setup
```bash
cd client
npm install
npm run dev
# Application runs on http://localhost:5173
```

## API Endpoints

- `/user` - User authentication and profile management
- `/menu` - Menu items management
- `/order` - Order processing and tracking

## Configuration

### CORS Settings
The backend is configured to accept requests from `http://localhost:5173` with credentials enabled.

### Environment Variables
Create a `.env` file in the server directory with:
- Database connection string
- JWT secret
- Port configuration

## License

ISC
