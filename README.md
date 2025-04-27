# Database Project

This project is a Node.js application that demonstrates how to interact with a MongoDB database.  
It includes examples of basic CRUD operations (Create, Read, Update, Delete) using Express and Mongoose.



## 📂 Project Structure

```
/database
├── models/
│   └── userModel.js      # Mongoose schema for User
├── controllers/
│   └── userController.js # Handles user logic
├── routes/
│   └── userRoutes.js     # API routes for user operations
├── views/
│   └── (if any - EJS or frontend templates)
├── index.js              # Main server file (entry point)
├── package.json          # Project metadata and dependencies
```

## 🚀 Features

- Connects to MongoDB using Mongoose
- Create new users
- Read (get) user data
- Update user information
- Delete users
- Error handling and clean code structure (MVC Pattern)

---

## 🛠️ Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose (ODM)
- Postman (for API testing)

---

## 🏃‍♂️ How to Run Locally

1. **Clone the repository:**

```bash
git clone https://github.com/Darshit-Thakkar/MERN-Stack.git
cd database
```

2. **Install dependencies:**

```bash
npm install
```

3. **Set up your MongoDB:**
- Create a free cluster at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
- Get your MongoDB URI.

4. **Configure Environment Variables (Optional):**
- Create a `.env` file.
```bash
MONGO_URI=your-mongodb-uri
PORT=5000
```

5. **Start the server:**

```bash
npm start
```

or (for development with nodemon):

```bash
npm run dev
```

6. **Test APIs:**
- Use Postman or any API testing tool to send requests to:
  - `POST /api/users`
  - `GET /api/users`
  - `PUT /api/users/:id`
  - `DELETE /api/users/:id`

---

## 📬 Contact

If you have any questions or suggestions, feel free to contact me:

- **Name:** Darshit Thakkar
- **Email:** thakkardarshit484@gmail.com
- **LinkedIn:** [darshitthakkar1106](https://www.linkedin.com/in/darshitthakkar1106)
- **GitHub:** [Darshit-Thakkar](https://github.com/Darshit-Thakkar)

---

## ⭐ Extra

- Project follows MVC (Model-View-Controller) architecture.
- Proper error handling.
- Clean and scalable code structure.
