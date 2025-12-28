# Solecraft-TS

A TypeScript-based Node.js backend for user authentication and management.

## Features
- User registration and login
- Password hashing
- JWT authentication
- Cookie-based session management
- Modular structure (controllers, models, routes, utils)

## Project Structure
```
src/
  app.ts
  index.ts
  config/
    db.ts
  controllers/
    user.controller.ts
  middlewares/
  models/
    user.model.ts
  routes/
    user.routes.ts
  types/
  utils/
    Hashpass.ts
```

## Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- npm
- MongoDB instance

### Installation
1. Clone the repository:
   ```bash
   git clone <repo-url>
   cd solecraft-ts
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the root directory and add:
   ```env
   JWT_SECRET=your_jwt_secret
   NODE_ENV=development
   MONGODB_URI=your_mongodb_uri
   ```

### Running the App
```bash
npm run dev
```

The server will start on `http://localhost:3000` by default.

## API Endpoints

### Auth
- `POST /api/v1/auth/register` — Register a new user
- `POST /api/v1/auth/login` — Login and receive JWT token

## License
MIT
