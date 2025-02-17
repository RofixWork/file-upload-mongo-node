# File Upload with MongoDB and Node.js

This project demonstrates how to upload files (images) to a server and store their references in a MongoDB database using Node.js, Express, and Cloudinary for cloud-based file storage.

## Features

- Upload product images to the server.
- Store product data in MongoDB.
- Upload images to Cloudinary for cloud storage.
- RESTful API for managing products and images.

## Technologies Used

- **Node.js**: JavaScript runtime environment.
- **Express**: Web framework for Node.js.
- **MongoDB**: NoSQL database for storing product data.
- **Cloudinary**: Cloud-based image and video management.
- **Express File Upload**: Middleware for handling file uploads.
- **Helmet**: Security middleware for Express.
- **XSS-Clean**: Middleware to sanitize user input.
- **Morgan**: HTTP request logger middleware.

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/RofixWork/file-upload-mongo-node.git
   cd file-upload-mongo-node
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment variables**:
   Create a `.env` file in the root directory and add the following variables:
   ```env
   LOCAL_PORT=5000
   MONGO_URI=your_mongodb_connection_string
   CLOUD_NAME=your_cloudinary_cloud_name
   CLOUD_API_KEY=your_cloudinary_api_key
   CLOUD_SECRET_KEY=your_cloudinary_api_secret
   ```

4. **Start the server**:
   ```bash
   npm start
   ```

5. **Access the API**:
   The server will be running at `http://localhost:5000`.

## API Endpoints

### Products

- **GET `/api/v1/products`**: Fetch all products.
- **POST `/api/v1/products`**: Create a new product.

### Image Upload
- **POST `/api/v1/products/uploads`**: Upload an image to Cloudinary.

## Project Structure

```
file-upload-mongo-node/
├── controllers/            # Controllers for handling requests
│   └── product.controller.js
├── db/                     # Database connection setup
│   └── connect.js
├── middlewares/            # Custom middlewares
│   ├── error-handler.js
│   └── not-found.js
├── models/                 # MongoDB models
│   └── Product.js
├── routes/                 # API routes
│   └── product.routes.js
├── public/                 # Static files (e.g., uploaded images)
├── .env                    # Environment variables
├── app.js                  # Main application file
├── README.md               # Project documentation
└── package.json            # Project dependencies
```
## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Cloudinary](https://cloudinary.com/)
- [express-fileupload](https://www.npmjs.com/package/express-fileupload)
```