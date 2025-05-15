# WTWR (What to Wear?): Back End

The back-end project is focused on creating a server for the WTWR application. You’ll gain a deeper understanding of how to work with databases, set up security and testing, and deploy web applications on a remote machine. The eventual goal is to create a server with an API and user authorization.

## Running the Project

`npm run start` — to launch the server

`npm run dev` — to launch the server with the hot reload feature

## Technologies and Techniques Used

- **Node.js & Express.js** — for building the server and routing
- **MongoDB & Mongoose** — for working with the database
- **Nodemon** — for development hot reload
- **ESLint** — for code quality and style checking
- **http-status-codes** — for cleaner status code management
- **Custom middleware** — for error handling and request preprocessing
- **REST API principles** — to structure endpoints clearly

## API Endpoints

### Users

- `GET /users` — Get all users
- `GET /users/:userId` — Get a specific user by ID
- `POST /users` — Create a new user

### Items

- `GET /items` — Get all clothing items
- `POST /items` — Add a new clothing item
- `DELETE /items/:itemId` — Delete an item by ID

## Author

Developed by [ Natalia Keegan ].
