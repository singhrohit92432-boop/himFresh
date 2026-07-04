# himFresh

AI-powered platform for discovering and purchasing authentic Himalayan products.

## Tech Stack

- React
- Tailwind CSS
- Node.js
- Express.js
- MongoDB

## Setup

## How to run backend locally

1. Open backend folder

```bash
cd backend
```

2. Install dependencies

```bash
npm install
```

3. Start backend server

```bash
npm run dev
```

Backend runs on:

http://localhost:5000

## API Endpoints

- GET /api/products
- GET /api/products/:id
- POST /api/products
- PUT /api/products/:id
- DELETE /api/products/:id
- GET /api/products/search?q=

## Database

### Database Choice
I used **MongoDB Atlas** with **Mongoose** because it is a NoSQL database that provides a flexible document-based schema and integrates well with Node.js applications.

### Database Schema
Entity:
- Product
  - name (String)
  - price (Number)
  - createdAt (Date)
  - updatedAt (Date)

### Setup the Database

1. Create a MongoDB Atlas cluster.
2. Create a database user.
3. Add your IP address to Network Access.
4. Create a `.env` file with:

```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

5. Install dependencies:

```bash
npm install
```

6. Start the server:

```bash
node server.js
```